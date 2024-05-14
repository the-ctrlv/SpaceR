import { useAppSelector } from 'hooks/store/useAppSelector';

import Note from './Note';
import { StyledNotes } from './styles';

export default function Notes() {
  const notesList = useAppSelector((state) => state.notes);
  return (
    <StyledNotes className="w-full pb-8">
      {notesList.length === 0 && (
        <li className="rounded-xl mb-3 last:mb-0 px-4 py-5 w-full">
          <p className="whitespace-pre-line break-all">
            You haven&apos;t written any notes yet.
          </p>
        </li>
      )}
      {notesList.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </StyledNotes>
  );
}
