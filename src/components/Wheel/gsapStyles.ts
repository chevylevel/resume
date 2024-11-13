export const activePointStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    backgroundColor: "#F4F5F9",
    borderRadius: '50%',
    outline: "1px solid #303E5880",
    duration: 0.3,
    ease: "power1.inOut",
}

export const activeIndexStyles = {
    display: 'flex',
    opacity: 1,
    duration: 0.3,
    ease: "power1.inOut",
}

export const defaultPointStyles = {
    width: 6,
    height: 6,
    backgroundColor: "#42567A",
    outline: "none",
    duration: 0.3,
    ease: "power1.inOut",
}

export const defaultIndexStyles = {
    display: 'none',
    opacity: 0,
    duration: 0.3,
    ease: "power1.inOut",
}

export const hoverIndexStyles = { ...activeIndexStyles }
export const hoverPointStyles = { ...activePointStyles }

export const activeLabelStyles = {
    display: 'flex',
    opacity: 1,
    duration: 0.3,
    ease: "power1.inOut",
}

export const defaultLabelStyles = {
    display: 'none',
    opacity: 0,
    duration: 0.3,
    ease: "power1.inOut",
}
