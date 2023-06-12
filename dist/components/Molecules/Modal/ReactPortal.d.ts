/// <reference types="react" />
interface ReactPortalProps {
    wrapperId: string;
    children: React.ReactNode;
}
export default function ReactPortal(props: ReactPortalProps): import("react").ReactPortal | null;
export {};
