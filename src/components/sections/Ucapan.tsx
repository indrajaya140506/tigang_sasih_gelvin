"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";

type Attendance = "Hadir" | "Tidak hadir";

type Reply = {
  id: number;
  name: string;
  message: string;
  date: string;
};

type Comment = {
  id: number;
  name: string;
  attendance: Attendance;
  message: string;
  date: string;
  replies: Reply[];
};

export default function Ucapan() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<Attendance>("Hadir");
  const [message, setMessage] = useState("");

  const [replyName, setReplyName] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [replyTo, setReplyTo] = useState<number | null>(null);

  const [sortNewest, setSortNewest] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [sendingReply, setSendingReply] = useState(false);

  // Ambil data komentar dan balasan dari Supabase
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const { data: commentData, error: commentError } = await supabase
      .from("ucapan")
      .select("*")
      .order("created_at", { ascending: true });

    if (commentError) {
      console.error("Gagal mengambil ucapan:", commentError.message);
      setLoading(false);
      return;
    }

    const { data: replyData, error: replyError } = await supabase
      .from("replies")
      .select("*")
      .order("created_at", { ascending: true });

    if (replyError) {
      console.error("Gagal mengambil balasan:", replyError.message);
      setLoading(false);
      return;
    }

    const formattedComments: Comment[] = (commentData ?? []).map((comment) => ({
      id: comment.id,
      name: comment.name,
      attendance: comment.attendance,
      message: comment.message,
      date: comment.created_at,
      replies: (replyData ?? [])
        .filter((reply) => reply.comment_id === comment.id)
        .map((reply) => ({
          id: reply.id,
          name: reply.name,
          message: reply.message,
          date: reply.created_at,
        })),
    }));

    setComments(formattedComments);
    setLoading(false);
  };

  // Kirim ucapan ke Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim() || sending) return;

    setSending(true);

    const { error } = await supabase.from("ucapan").insert({
      name: name.trim(),
      attendance,
      message: message.trim(),
    });

    if (error) {
      console.error("Gagal mengirim ucapan:", error.message);
      alert("Ucapan gagal dikirim. Silakan coba kembali.");
      setSending(false);
      return;
    }

    setName("");
    setMessage("");
    setAttendance("Hadir");

    await fetchComments();
    setSending(false);
  };

  // Kirim balasan ke Supabase
  const handleReply = async (e: React.FormEvent, commentId: number) => {
    e.preventDefault();

    if (!replyName.trim() || !replyMessage.trim() || sendingReply) return;

    setSendingReply(true);

    const { error } = await supabase.from("replies").insert({
      comment_id: commentId,
      name: replyName.trim(),
      message: replyMessage.trim(),
    });

    if (error) {
      console.error("Gagal mengirim balasan:", error.message);
      alert("Balasan gagal dikirim. Silakan coba kembali.");
      setSendingReply(false);
      return;
    }

    setReplyName("");
    setReplyMessage("");
    setReplyTo(null);

    await fetchComments();
    setSendingReply(false);
  };

  // Urutan komentar
  const sortedComments = [...comments].sort((a, b) =>
    sortNewest
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  // Load More komentar
  const displayedComments = sortedComments.slice(0, visibleCount);

  // Waktu relatif
  const formatDate = (date: string) => {
    const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);

    if (seconds < 60) return "Just now";

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;

    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} days ago`;

    const months = Math.floor(days / 30);
    if (months < 12) return `${months} months ago`;

    const years = Math.floor(months / 12);
    return `${years} years ago`;
  };

  return (
    <section
      id="ucapan"
      className="relative w-full bg-white px-4 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[430px]">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2
            className="text-4xl font-normal text-[#493126] sm:text-5xl"
            style={{ fontFamily: "var(--font-great-vibes-custom)" }}
          >
            Kirim Ucapan
          </h2>
        </motion.div>

        {/* FORM UCAPAN */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-[#d2d2d2] pt-8"
        >
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* MESSAGE EDITOR */}
            <div className="overflow-hidden rounded-[4px] border border-[#dedede] bg-white">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                rows={4}
                maxLength={1000}
                required
                className="block min-h-[115px] w-full resize-none rounded-[4px] border border-[#dedede] bg-white px-4 py-3 text-[16px] leading-6 text-[#555] outline-none transition focus:border-[#241812] placeholder:italic placeholder:text-[#999]"
              />
            </div>

            {/* NAME */}
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#bdbdbd]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2c-4.42 0-8 2.24-8 5v2h16v-2c0-2.76-3.58-5-8-5Z" />
              </svg>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name*"
                maxLength={100}
                required
                className="h-[46px] w-full rounded-[5px] border-2 border-[#dedede] bg-white pl-10 pr-3 text-[16px] text-[#555] outline-none transition focus:border-[#b49a83] placeholder:text-[#777]"
              />
            </div>

            {/* ATTENDANCE */}
            <div className="flex items-center gap-3 py-1">
              <div className="w-[35%] shrink-0 text-[15px] font-medium text-[#555]">
                KEHADIRAN
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <label className="flex cursor-pointer items-center gap-3 text-[15px] font-semibold text-[#292929]">
                  <input
                    type="radio"
                    name="attendance"
                    checked={attendance === "Hadir"}
                    onChange={() => setAttendance("Hadir")}
                    className="h-[15px] w-[15px] accent-[#777]"
                  />
                  Saya akan hadir
                </label>

                <label className="flex cursor-pointer items-center gap-3 text-[15px] font-semibold text-[#292929]">
                  <input
                    type="radio"
                    name="attendance"
                    checked={attendance === "Tidak hadir"}
                    onChange={() => setAttendance("Tidak hadir")}
                    className="h-[15px] w-[15px] accent-[#777]"
                  />
                  Maaf belum bisa hadir
                </label>
              </div>
            </div>

            {/* SEND BUTTON */}
            <div className="flex justify-end pt-6">
              <button
                type="submit"
                disabled={sending}
                className="min-w-[96px] rounded-[4px] bg-[#241812] px-6 py-2.5 text-[15px] font-medium text-white shadow-md transition hover:bg-[#38271f] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </motion.div>

        {/* COMMENT SECTION */}
        <div className="mt-14">
          {/* COMMENT HEADER */}
          <div className="mb-5">
            <h3 className="mb-2 text-[17px] font-medium tracking-[1.5px] text-[#444]">
              {comments.length} COMMENTS
            </h3>

            <div className="h-[2px] w-full bg-[#444]" />

            {/* SORT */}
            <div className="relative flex border-b border-[#cccccc]">
              <button
                type="button"
                onClick={() => setSortNewest((prev) => !prev)}
                className="flex min-w-[125px] items-center justify-center gap-3 border-b-2 border-[#aaa] px-5 py-2 text-[14px] text-[#777] transition hover:text-[#333]"
              >
                {sortNewest ? "Newest" : "Oldest"}
                <span className="text-[11px]">▼</span>
              </button>
            </div>
          </div>

          {/* COMMENTS LIST */}
          <div className="space-y-12">
            {loading ? (
              <div className="py-10 text-center">
                <p className="text-sm text-[#999]">Loading comments...</p>
              </div>
            ) : (
              <>
                <AnimatePresence mode="popLayout">
                  {displayedComments.map((comment) => (
                    <motion.div
                      key={comment.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 1, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      {/* COMMENT AUTHOR */}
                      <div className="mb-3 flex items-center gap-4">
                        {/* AVATAR */}
                        <div className="relative flex h-[58px] w-[58px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[#241812]">
                          <svg
                            className="h-8 w-8 text-[#F5EBDD]"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2c-4.42 0-8 2.24-8 5v2h16v-2c0-2.76-3.58-5-8-5Z" />
                          </svg>
                        </div>

                        {/* NAME & META */}
                        <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
                          <h4 className="text-[19px] font-medium text-[#18344c]">
                            {comment.name}
                          </h4>

                          {/* SHARE ICON */}
                          <svg
                            className="h-[16px] w-[16px] text-[#929292]"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7a3.3 3.3 0 0 0 0-1.39l7.05-4.11a3 3 0 1 0-.94-1.72L7.97 9.59a3 3 0 a 0 0 4.82l7.12 4.16a3 3 0 a 0 2.91-2.49Z" />
                          </svg>

                          {/* CLOCK */}
                          <svg
                            className="h-[15px] w-[15px] text-[#929292]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 2" />
                          </svg>

                          <span className="text-[13px] text-[#999]">
                            {formatDate(comment.date)}
                          </span>
                        </div>
                      </div>

                      {/* MESSAGE */}
                      <p className="whitespace-pre-wrap break-words text-[16px] leading-[1.8] text-[#737373]">
                        {comment.message}
                      </p>

                      {/* ATTENDANCE STATUS */}
                      <div className="mt-4 flex flex-wrap items-center gap-3 border-b border-[#eeeeee] pb-2">
                        <span className="bg-[#f6f6f6] px-3 py-2 text-[12px] text-[#888]">
                          KEHADIRAN
                        </span>

                        <span className="text-[13px] text-[#999]">
                          {comment.attendance === "Hadir"
                            ? "Saya akan hadir"
                            : "Maaf belum bisa hadir"}
                        </span>
                      </div>

                      {/* REPLY BUTTON */}
                      <button
                        type="button"
                        onClick={() =>
                          setReplyTo(replyTo === comment.id ? null : comment.id)
                        }
                        className="mt-7 flex items-center gap-2 text-[15px] text-[#999] transition hover:text-[#555]"
                      >
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M10 9V5L3 12l7 7v-4c5 0 8 1.5 11 5-1-5-4-11-11-11Z" />
                        </svg>

                        {replyTo === comment.id ? "Cancel" : "Reply"}
                      </button>

                      {/* REPLY FORM */}
                      <AnimatePresence>
                        {replyTo === comment.id && (
                          <motion.form
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            onSubmit={(e) => handleReply(e, comment.id)}
                            className="mt-4 space-y-3 overflow-hidden"
                          >
                            <input
                              type="text"
                              value={replyName}
                              onChange={(e) => setReplyName(e.target.value)}
                              placeholder="Name*"
                              maxLength={100}
                              required
                              className="h-10 w-full rounded border border-[#ddd] bg-white px-3 text-sm text-[#444] placeholder:text-[#999] outline-none focus:border-[#a88a70]"
                            />

                            <textarea
                              value={replyMessage}
                              onChange={(e) => setReplyMessage(e.target.value)}
                              placeholder="Write a reply..."
                              rows={3}
                              maxLength={500}
                              required
                              className="w-full resize-none rounded border border-[#ddd] bg-white px-3 py-2 text-sm text-[#444] placeholder:text-[#999] outline-none focus:border-[#a88a70]"
                            />

                            <button
                              type="submit"
                              disabled={sendingReply}
                              className="rounded-[4px] bg-[#241812] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#38271f] active:scale-95 disabled:opacity-60"
                            >
                              {sendingReply ? "Sending..." : "Send Reply"}
                            </button>
                          </motion.form>
                        )}
                      </AnimatePresence>

                      {/* REPLIES */}
                      {comment.replies.length > 0 && (
                        <div className="ml-5 mt-5 space-y-5 border-l-2 border-[#eee] pl-4">
                          {comment.replies.map((reply) => (
                            <div key={reply.id}>
                              <div className="mb-1 flex flex-wrap items-center gap-2">
                                <h5 className="text-sm font-semibold text-[#18344c]">
                                  {reply.name}
                                </h5>

                                <span className="text-xs text-[#999]">
                                  {formatDate(reply.date)}
                                </span>
                              </div>

                              <p className="whitespace-pre-wrap break-words text-sm leading-6 text-[#777]">
                                {reply.message}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* LOAD MORE */}
                {comments.length > visibleCount && (
                  <div className="flex justify-center pt-8">
                    <button
                      type="button"
                      onClick={() => setVisibleCount((prev) => prev + 5)}
                      className="rounded-[4px] border border-[#241812] px-7 py-2.5 text-sm font-medium text-[#241812] transition hover:bg-[#241812] hover:text-white active:scale-95"
                    >
                      Load More
                    </button>
                  </div>
                )}

                {/* EMPTY STATE */}
                {comments.length === 0 && (
                  <div className="py-10 text-center">
                    <p className="text-sm text-[#999]">
                      Belum ada ucapan. Jadilah yang pertama memberikan doa.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
