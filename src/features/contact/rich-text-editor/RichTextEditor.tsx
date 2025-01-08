import { RichTextEditor as RTE, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";

type RichTextEditorProps = {
  value: string;
  onChange: (content: string) => void;
};

function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <RTE editor={editor} mb={2} h={300}>
      <RTE.Toolbar sticky stickyOffset={60}>
        <RTE.ControlsGroup>
          <RTE.Bold />
          <RTE.Italic />
          <RTE.Underline />
          <RTE.Strikethrough />
          <RTE.ClearFormatting />
          <RTE.Highlight />
        </RTE.ControlsGroup>

        <RTE.ControlsGroup>
          <RTE.H1 />
          <RTE.H2 />
          <RTE.H3 />
          <RTE.H4 />
        </RTE.ControlsGroup>

        <RTE.ControlsGroup>
          <RTE.Blockquote />
          <RTE.BulletList />
          <RTE.OrderedList />
          <RTE.Subscript />
          <RTE.Superscript />
        </RTE.ControlsGroup>

        <RTE.ControlsGroup>
          <RTE.Link />
          <RTE.Unlink />
        </RTE.ControlsGroup>

        <RTE.ControlsGroup>
          <RTE.AlignLeft />
          <RTE.AlignCenter />
          <RTE.AlignJustify />
          <RTE.AlignRight />
        </RTE.ControlsGroup>

        <RTE.ControlsGroup>
          <RTE.Undo />
          <RTE.Redo />
        </RTE.ControlsGroup>
      </RTE.Toolbar>

      <RTE.Content />
    </RTE>
  );
}

export default RichTextEditor;
