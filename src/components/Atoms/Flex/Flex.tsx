import React, { PropsWithChildren, ReactElement } from "react";
import { gap, height, sprinkles, Sprinkles } from "../../../sprinkles.css";
import { gapRecipe } from "./flexStyles.css";
type Cols = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
interface FlexProps extends React.HTMLProps<HTMLDivElement> {
    container?: boolean;
    height?: string;
    item?: boolean;
    sm?: Cols;
    md?: Cols;
    lg?: Cols;
    gap?: keyof typeof gap;
    column?: boolean;
    children?: React.ReactNode;
    sx?: Sprinkles;
    animation?: any;
}
export default function Flex(props: FlexProps) {
    function getStyles(p: FlexProps): Sprinkles {
        if (p.container) {
            return {
                boxSizing: "border-box",
                display: "flex",
                alignItems: "stretch",
                flexWrap: "wrap",
                flexDirection: p.column ? "column" : "row",
                ...(props.sx ? { ...props.sx } : undefined),
            };
        }

        if (p.item) {
            return {
                boxSizing: "border-box",
                flexBasis: {
                    mobile: p.sm,
                    tablet: p.md,
                    desktop: p.lg,
                },
                maxWidth: {
                    mobile: p.sm,
                    tablet: p.md,
                    desktop: p.lg,
                },
                ...(props.sx ? { ...props.sx } : undefined),
            };
        }
        return {};
    }

    function getGapStyles(p: FlexProps) {
        if (p.container) {
            return gapRecipe({
                container: p.gap,
            });
        }
        if (p.item) {
            return gapRecipe({
                item: p.gap,
            });
        }
        return {};
    }

    const childrenWithProps = React.Children.map(props.children, (child) => {
        let item = child as ReactElement<PropsWithChildren<FlexProps>>;
        if (React.isValidElement(child)) {
            return React.cloneElement(item, {
                ...child.props,
                gap: props.gap,
            });
        }
        return item;
    });
    return (
        <div
            style={{ height: props.height }}
            className={`${getGapStyles(props)} + ${sprinkles(getStyles(props))} + ${props.animation} `}
        >
            {childrenWithProps}
        </div>
    );
}
