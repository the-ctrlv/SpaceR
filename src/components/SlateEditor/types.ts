import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

export type CustomElement = { type: 'paragraph'; children: CustomText[] };

type CustomText = { text: string; bold: boolean; italic: boolean };

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
    BaseElement: {
      type: string;
    };
  }
}

export type RenderElementProps = {
  children: React.ReactNode;
  element: {
    type: string;
  };
};
export type RenderLeafProps = {
  children: React.ReactNode;
  attributes: {
    [key: string]: string | boolean;
  };
  leaf: {
    bold: boolean;
    italic?: boolean;
  };
};
