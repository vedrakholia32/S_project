import { Dialog } from "./ui/dialog";
import React, { useState } from "react";
import { DialogContent } from "./ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function CommentDialog({ open, setOpen }) {
  const [text, setText] = useState("");

  const chanegEventHandler = (e) => {
    const inputText = e.target.value;
    if (inputText.trim()) {
      setText(inputText);
    } else {
      setText("");
    }
  };

  const sendMessageHandler=  async () =>{
    alert(text)

  }
  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={() => setOpen(false)}
        className="max-w-5xl p-0 flex flex-col"
      >
        <div className="flex flex-1">
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1733246849141-50776096f51c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="comment_img"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>

          <div className="w-1/2 flex flex-col justify-between">
            <div className="flex items-center justify-between p-4">
              <div className="flex gap-3 items-center">
                <Link>
                  <Avatar>
                    <AvatarImage src="" alt="post_image" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
                <div>
                  <Link className="font-semibold tex-xs">username</Link>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex-1 overflow-y-auto max-h-96 p-4">
              comments comments comments
            </div>
            <div>
              <div className="flex m-2">
                <input
                onChange={chanegEventHandler}
                value={text}
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full outline-none border text-sm border-gray-300 p-2 rounded"
                />
                <Button disabled={!text.trim()}onClick={sendMessageHandler} varient="outline">send</Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
