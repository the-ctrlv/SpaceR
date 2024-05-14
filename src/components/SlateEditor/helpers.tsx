/* eslint-disable @typescript-eslint/no-explicit-any */
import { Editor, Element, Transforms } from 'slate';

export const CustomEditor = {
  isCurrentBlock(editor: Editor, format: string) {
    const [match] = Editor.nodes(editor, {
      match: (n: any) => n.type === format,
    });
    return !!match;
  },
  toggleCurrentBlock(editor: Editor, format: string) {
    const isActive = CustomEditor.isCurrentBlock(editor, format);
    Transforms.setNodes(
      editor,
      { type: isActive ? 'paragraph' : format } as any,
      {
        match: (n: any) => Element.isElement(n) && Editor.isBlock(editor, n),
      }
    );
  },

  isBoldMarkActive(editor: Editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.bold === true : false;
  },

  isItalicMarkActive(editor: Editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.italic === true : false;
  },

  toggleBoldMark(editor: Editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, 'bold');
    } else {
      Editor.addMark(editor, 'bold', true);
    }
  },

  toggleItalicMark(editor: Editor) {
    const isActive = CustomEditor.isItalicMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, 'italic');
    } else {
      Editor.addMark(editor, 'italic', true);
    }
  },
};

export const toolbarButtons = [
  {
    id: 1,
    format: 'headingOne',
    type: 'block',
    text: 'H1',
  },
  {
    id: 2,
    format: 'headingTwo',
    type: 'block',
    text: 'H2',
  },
  {
    id: 3,
    format: 'headingThree',
    type: 'block',
    text: 'H3',
  },
  {
    id: 4,
    format: 'numberedList',
    type: 'block',
    text: 'Numbered list',
  },
  {
    id: 5,
    format: 'bulletedList',
    type: 'block',
    text: 'Bulleted list',
  },
];
