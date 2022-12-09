import { Fade, Slide } from 'react-awesome-reveal';

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
};

export default function Reveal({ children, className }: Props) {
  return (
    <Fade triggerOnce duration={4000} className={className}>
      {children}
    </Fade>
  );
}
