import React, { useEffect } from 'react';

const eventTargetIsNode = (
  eventTarget: EventTarget | null
): eventTarget is Node => !!eventTarget && 'baseURI' in eventTarget;

export const useClickOutside = (
  ref: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[],
  callback: () => void
) => {
  useEffect(() => {
    const handleClick = (evt: MouseEvent | TouchEvent) => {
      const refs = Array.isArray(ref) ? ref : [ref];
      const targetAsNode = eventTargetIsNode(evt.target) ? evt.target : null;
      const refsDoNotContainTarget =
        targetAsNode &&
        refs.every(
          (refItem) =>
            refItem.current && !refItem.current.contains(targetAsNode)
        );
      if (refsDoNotContainTarget) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [ref, callback]);
};
