import { CSSTransition, SwitchTransition } from 'react-transition-group';

export default function FadeInWrapper({
  animationKey,
  children,
}: {
  animationKey: string;
  children: React.ReactNode;
}) {
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        timeout={500}
        classNames="fade"
        unmountOnExit
        key={animationKey}
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
}
