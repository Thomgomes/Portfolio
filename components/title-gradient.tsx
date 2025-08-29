type TitleGradientProps = React.HTMLAttributes<
  HTMLHeadingElement | HTMLParagraphElement
> & {
    children: React.ReactNode;
    value?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}


export default function TitleGradient({children, value = "h1", ...props}: TitleGradientProps) {
    const Tag = value
    return (
    <Tag
      {...props}
      style={{
        backgroundImage:
          "radial-gradient(138.06% 1036.51% at 95.25% -2.54%, #70d1ff 14.06%, #ade4ff 51.02%, #dbf3ff 79.09%)",
      }}
    >
      {children}
    </Tag>
  );
}
