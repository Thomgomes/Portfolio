type LineProps = {
    position?: string
}

export function Line({position}: LineProps) {
    if (position === "all") {
        return (
            <>
                <div
                    aria-hidden="true"
                    className="line pointer-events-none absolute left-1/2 z-0 h-24 w-[120%] -translate-x-1/2 rotate-2 opacity-70 -top-10"
                    
                />
                <div
                    aria-hidden="true"
                    className="line pointer-events-none absolute left-1/2 z-0 h-24 w-[120%] -translate-x-1/2 rotate-2 opacity-70 -bottom-10"
                    
                />
            </>
        )
    }

    return (
        <div
              aria-hidden="true"
              className={`line pointer-events-none absolute left-1/2 z-0 h-24 w-[120%] -translate-x-1/2 rotate-2 opacity-70 ${position === "bottom" ? "-bottom-10" : "-top-10"}`}
              
            />
    )
}