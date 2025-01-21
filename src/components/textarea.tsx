import { ChangeEventHandler, KeyboardEventHandler, useRef } from "react";

type TextAreaProps = {
  value: string;
  onChange: ChangeEventHandler;
  onKeyDown: KeyboardEventHandler
};

function TextArea({ value, onChange, onKeyDown }: TextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function autoResize() {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }

  return (
    <textarea
      ref={textareaRef}
      onInput={autoResize}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="bg-neutral-800 rounded-sm resize-auto min-h-24 max-h-96 w-full pl-2 pt-1"
      placeholder="Write something..."
      value={value}
    />
  );
}

export default TextArea;
