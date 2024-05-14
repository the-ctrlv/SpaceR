/* eslint-disable no-nested-ternary */
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import { colors } from 'styles/theme';
import { v4 as uuidv4 } from 'uuid';

import { notesSlice } from 'store/reducers/NotesSlice';

import { useAppDispatch } from 'hooks/store/useAppDispatch';

import SlateEditor from 'components/SlateEditor';
import SpaceButton from 'components/SpaceButton';
import SpaceInput from 'components/SpaceInput';
import SpaceModal from 'components/SpaceModal';

import { ReactComponent as IconDelete } from 'assets/icons/delete.svg';
import { ReactComponent as IconEdit } from 'assets/icons/edit-white.svg';
import { ReactComponent as IconMedia } from 'assets/icons/media.svg';

import { INotes } from 'types';

type ModalProps = {
  cancel: () => void;
  isOpen: boolean;
  isLookMode?: boolean;
  note?: INotes;
};

export default function NoteModal({
  isOpen,
  cancel,
  note,
  isLookMode,
}: ModalProps) {
  const timeStamp: string = moment(new Date()).format('llll');
  const [noteText, setNoteText] = useState('');
  const [title, setTitle] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isEditActive, setIsEditActive] = useState<boolean>(false);
  const [image, setImage] = useState<string>(note?.image || '');

  const dispatch = useAppDispatch();

  const { addNote, editNote } = notesSlice.actions;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isLookMode) {
      setNoteText(note?.body || '');
      setTitle(note?.title || '');
      setImage(note?.image || '');
      setIsEditActive(false);
      return;
    }
    setTimeout(() => {
      setNoteText('');
      setTitle('');
      setImage('');
    }, 100);
  }, [isOpen, isLookMode, note]);

  useEffect(() => {
    // if user edit note
    if (isEditActive) {
      if (
        note?.title === title &&
        note?.body === noteText &&
        note?.image === image
      ) {
        setIsButtonDisabled(true);
      } else {
        setIsButtonDisabled(false);
      }
      if (title === '') {
        // if user edited note and remove all the title text
        setIsButtonDisabled(true);
      }
      // if user add new note and remove all the title text
    } else if (title === '') {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [noteText, title, isOpen, isEditActive, note, image]);

  const handleActionNote = () => {
    if (isLookMode) {
      dispatch(
        editNote({
          id: note?.id as string,
          image: image || undefined,
          time: timeStamp,
          title,
          body: noteText,
        })
      );
    } else {
      dispatch(
        addNote({
          id: uuidv4(),
          image: image || undefined,
          time: timeStamp,
          title,
          body: noteText,
        })
      );
      cancel();
    }
  };

  const titleInput = (
    <SpaceInput
      titleInput
      defaultValue={title || note?.title}
      className="mb-2 journal-title w-full "
      onChange={(e) => {
        setTitle(e.target.value);
      }}
      placeholder="Title"
    />
  );

  const saveButton = (
    <SpaceButton
      className="w-full"
      onClick={() => {
        handleActionNote();
      }}
      disabled={isButtonDisabled}
    >
      Save
    </SpaceButton>
  );

  const mediaButton = (
    <div
      className={`h-10 w-10 bg-inside-content-overlay rounded-md flex items-center justify-center cursor-pointer mb-2
      ${isLookMode && isEditActive && image && 'absolute right-4 bottom-2'}`}
      onClick={() => inputRef.current?.click()}
    >
      <IconMedia className="block w-5 m-1 icon-fill-colored" />
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (readerEvent) => {
              const imageData = readerEvent.target?.result;
              if (typeof imageData === 'string') {
                setImage(imageData);
              }
            };
            reader.readAsDataURL(file);
          }
        }}
      />
    </div>
  );

  return (
    <SpaceModal isOpen={isOpen} cancel={cancel}>
      <header className="flex items-center justify-center relative">
        <h3
          className="text-xl font-semibold truncate"
          style={{ maxWidth: '350px' }}
        >
          {isLookMode ? (isEditActive ? 'Edit note' : note?.title) : 'New note'}
        </h3>
        {isLookMode && !isEditActive && (
          <div
            onClick={() => setIsEditActive(!isEditActive)}
            className="border-2 bg-gray-500 rounded-lg p-1 absolute right-4 bottom-2 cursor-pointer"
          >
            <IconEdit className="block w-3 m-1" />
          </div>
        )}
      </header>
      <div
        className="my-5 mx-4 flex flex-col"
        style={{
          height: 'calc(100% - 193px)',
        }}
      >
        <div className="overflow-auto pb-10 ">
          {image && (
            <div className="relative">
              {isLookMode && isEditActive && (
                <>
                  {mediaButton}
                  <div
                    className="h-10 w-10 bg-gray-300 rounded-md flex items-center justify-center cursor-pointer absolute right-[65px] bottom-4"
                    onClick={() => setImage('')}
                  >
                    <IconDelete
                      style={{
                        fill: `${colors.red}`,
                      }}
                      className="w-5 h-auto"
                    />
                  </div>
                </>
              )}
              <img
                src={image}
                alt="note"
                className="h-[200px] mb-3 rounded-md mx-auto"
              />
            </div>
          )}

          {isLookMode ? (isEditActive ? titleInput : null) : titleInput}
          <div className="note-actions flex flex-wrap gap-2">
            {isLookMode && isEditActive && !image && mediaButton}
            {!isLookMode && mediaButton}
          </div>
          <SlateEditor
            isReadOnly={isLookMode ? !isEditActive : false}
            initialText={noteText || note?.body}
            setNoteText={setNoteText}
          />
        </div>
      </div>
      <div className="flex gap-3 mt-3 justify-center w-11/12 mx-auto">
        {!isLookMode && saveButton}
        {isLookMode && isEditActive && saveButton}
        <SpaceButton
          className="w-full"
          variant="outline"
          onClick={() => {
            if (isEditActive) {
              setIsEditActive(false);
              setImage(note?.image || '');
            } else {
              cancel();
            }
          }}
        >
          {isLookMode && !isEditActive ? 'Ok' : 'Cancel'}
        </SpaceButton>
      </div>
    </SpaceModal>
  );
}
