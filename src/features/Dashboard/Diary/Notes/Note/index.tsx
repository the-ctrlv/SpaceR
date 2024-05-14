import { useEffect, useRef, useState } from 'react';
import { colors } from 'styles/theme';

import { notesSlice } from 'store/reducers/NotesSlice';

import { useWindowDimensions } from 'hooks/custom/useWindowDimensions';
import { useAppDispatch } from 'hooks/store/useAppDispatch';

import ConfirmationModal from 'components/ConfirmationModal';

import { ReactComponent as IconDelete } from 'assets/icons/delete.svg';

import { INotes } from 'types';

import NoteModal from '../../NoteModal';

export default function Note({ note }: { note: INotes }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState<boolean>(false);

  const containerRef = useRef<HTMLLIElement>(null);
  const [truncateWidth, setTruncateWidth] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  useEffect(() => {
    if (containerRef.current) {
      setTruncateWidth(containerRef.current.offsetWidth - 32);
    }
  }, [containerRef]);

  const dispatch = useAppDispatch();
  const { deleteNote } = notesSlice.actions;

  const { isMobile } = useWindowDimensions();
  return (
    <>
      <NoteModal
        isOpen={isModalOpen}
        cancel={() => setIsModalOpen(false)}
        note={note}
        isLookMode
      />
      <ConfirmationModal
        question="Are you sure you want to delete this note?"
        isOpen={isConfirmationModalOpen}
        confirm={() => {
          dispatch(
            deleteNote({
              id: note.id,
            })
          );
          setIsConfirmationModalOpen(false);
        }}
        cancel={() => setIsConfirmationModalOpen(false)}
      />

      <li
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={containerRef}
        key={note.title}
        className="rounded-xl mb-3 last:mb-0 p-4 w-full cursor-pointer relative"
        onClick={() => setIsModalOpen(true)}
      >
        {note.image && (
          <img src={note.image} alt="" className="w-full mb-2 rounded-xl" />
        )}
        <h2
          className="text-xl font-semibold truncate"
          style={{
            maxWidth: truncateWidth,
          }}
        >
          {note.title}
        </h2>
        <p className="text-xs font-semibold">{note.time}</p>
        <button
          type="button"
          className={`delete-btn absolute top-2 right-2 bg-inside-content-overlay w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 transform
          ${!isMobile && isHovered ? 'opacity-100' : 'opacity-0'}
        ${isMobile ? 'opacity-100' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsConfirmationModalOpen(true);
          }}
        >
          <IconDelete
            style={{
              fill: `${colors.red}`,
            }}
            className="w-5 h-auto"
          />
        </button>
      </li>
    </>
  );
}
