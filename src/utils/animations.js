export const animationWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
    timeline.to(rotationRef.current.roation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    })
    timeline.to(firstTarget, {
        ...animationProps,
        ease: 'power2.inOut'
        },
        '<'
    )
    timeline.to(secondTarget, {
        ...animationProps,
        ease: 'power2.inOut'
        },
        '<'
    )
}