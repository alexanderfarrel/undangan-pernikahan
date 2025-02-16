/* eslint-disable @typescript-eslint/ban-types */
import { useEffect, useState } from "react";
import Edit from "../../assets/icons/edit";
import Trash from "../../assets/icons/trash";
import { updateData } from "../../services/firebase/services";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import useVisibility from "../../services/hooks/useVisibility";

export default function CommentBox({
  id,
  name,
  comment,
  date,
  admin = false,
  user = false,
  handleDeleteComment,
  getComments,
}: {
  id: string;
  name: string;
  comment: string;
  date: any;
  user: boolean;
  admin: boolean;
  handleDeleteComment: Function;
  getComments: Function;
}) {
  const animation = useVisibility();
  const [edit, setEdit] = useState(false);
  const [newComment, setNewComment] = useState(comment);
  const newDate = new Date(
    date.seconds * 1000 + date.nanoseconds / 1_000_000
  ).toLocaleDateString("id-ID");

  const handleEdit = async (newComment: string) => {
    if (!newComment) {
      return toast.error("Komentar Tidak Boleh Kosong");
    }
    if (newComment.length == 0) {
      return toast.error("Komentar Tidak Boleh Kosong");
    }
    if (newComment === comment) {
      setEdit(false);
      return;
    }

    try {
      await updateData("comments", id, {
        comment: newComment,
        update_at: new Date(),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setEdit(false);
      getComments();
    }
  };

  useEffect(() => {
    if (edit) {
      document.getElementById("newComment")?.focus();
    }
  }, [edit]);
  return (
    <motion.div
      ref={animation.ref}
      animate={
        animation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
      }
      transition={{ duration: 0.7 }}
      className="border-b p-2"
    >
      <div className="flex justify-between">
        <h1 className="font-medium text-sm">{name.split("_").join(" ")}</h1>
        <p className="text-xs text-gray-500">{newDate}</p>
      </div>
      <div className="flex justify-between gap-3">
        {edit ? (
          <input
            id="newComment"
            type="text"
            defaultValue={comment}
            onChange={(e) => setNewComment(e.target.value)}
            className="text-sm text-gray-500 font-[400] bg-gray-100 px-2 py-1 rounded-lg outline-none w-full"
          />
        ) : (
          <p className="text-sm text-gray-500 font-[400]">{comment}</p>
        )}
        <div className="flex gap-1">
          {user && !edit && (
            <div
              onClick={() => setEdit(true)}
              className="bg-orange-400 rounded-lg p-1 w-6 h-6 hover:cursor-pointer hover:bg-orange-400/80"
            >
              <Edit />
            </div>
          )}
          {user && edit && (
            <div
              onClick={() => handleEdit(newComment)}
              className="bg-green-500 rounded-lg p-1 w-6 h-6 hover:cursor-pointer hover:bg-green-500/80"
            >
              <img
                src="/icons/checked.png"
                alt="checked"
                className="w-full h-full"
              />
            </div>
          )}
          {admin && (
            <div
              onClick={() => handleDeleteComment(id)}
              className="bg-red-500 rounded-lg p-1 w-6 h-6 hover:cursor-pointer hover:bg-red-500/80"
            >
              <Trash />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
