type LineProps = {
    position?: string
}

export function Line({position}: LineProps) {
    if (position === "all") {
        return (
            <>
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 z-0 h-24 w-[120%] -translate-x-1/2 rotate-2 opacity-40 -top-10"
                    style={{
                        background:
                            "linear-gradient(90deg, #121217 0%, #0075ad 50%, #121217 100%)",
                    }}
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 z-0 h-24 w-[120%] -translate-x-1/2 rotate-2 opacity-40 -bottom-10"
                    style={{
                        background:
                            "linear-gradient(90deg, #121217 0%, #0075ad 50%, #121217 100%)",
                    }}
                />
            </>
        )
    }

    return (
        <div
              aria-hidden="true"
              className={`pointer-events-none absolute left-1/2 z-0 h-24 w-[120%] -translate-x-1/2 rotate-2 opacity-40 ${position === "bottom" ? "-bottom-10" : "-top-10"}`}
              style={{
                background:
                  "linear-gradient(90deg, #121217 0%, #0075ad 50%, #121217 100%)",
              }}
            />
    )
}