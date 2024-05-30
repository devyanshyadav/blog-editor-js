"use client"; // Require when ripple functionality is needed in NextJS
    import React from "react";
    import clsx from "clsx";
    import Ripple from "material-ripple-effects";
    
    const DevButton = ({
      variant = "solid",
      size = "md",
      href,
      rounded,
      ripple = false,
      icon,
      children,
      ...props
    }) => {
      const initRipple = new Ripple();
      const commonStyle =
        "transition-all flex items-center gap-1 text-nowrap justify-center active:scale-95 w-fit h-fit border-2 border-cyan-400";
    
      const buttonVariants = {
        solid: " bg-cyan-400 text-white",
        border: "text-cyan-400 font-semibold ", // Changed from 'outline'
        light: "hover:bg-cyan-400/30 text-cyan-400 font-semibold ",
        flat: "border-cyan-400/5 bg-cyan-400/50 text-cyan-400 font-semibold backdrop-blur-sm ",
        ghost: "text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold ",
        customForIcon: "bg-transparent border-none hover:bg-cyan-400/30 text-cyan-800 font-bold text-lg",
      };
    
      const buttonSizes = {
        sm: icon ? "p-[4px] aspect-square" : "p-1 px-3",
        md: icon ? "p-1 aspect-square" : "p-2 px-5",
        lg: icon ? "p-2 aspect-square" : "p-3 px-7",
      };
      const buttonRoundness = {
        sm: "rounded-sm",
        md: "rounded-lg",
        lg: "rounded-2xl",
        full: "rounded-full",
        none: "rounded-none",
      };
    
      const buttonVariant = buttonVariants[variant] || buttonVariants.solid;
      const buttonSizeClass = buttonSizes[size] || buttonSizes.md;
      const buttonRoundnessClass = buttonRoundness[rounded] || buttonRoundness.md;
    
      const ButtonComponent = href ? "a" : "button";
    
      return (
        <ButtonComponent
          href={href}
          {...props}
          {...(ripple && { onMouseUp: (e) => initRipple.create(e, "light") })}
          className={clsx(
            commonStyle,
            buttonVariant,
            buttonSizeClass,
            buttonRoundnessClass,
            ButtonComponent === "a" && "underline",
            props.className
          )}
        >
          {children}
        </ButtonComponent>
      );
    };
    
    export default DevButton;
    