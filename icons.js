// icons.js - Accessible SVG Icon Components for LifeMate AI
// Zero external icon font dependencies, renders crisp vector SVG with ARIA labels

(function() {
  const h = (type, props, ...children) => {
    if (window.React && window.React.createElement) {
      return window.React.createElement(type, props, ...children);
    }
    // Fallback if React isn't initialized yet
    return { type, props: props || {}, children };
  };

  const svgBase = (pathContent, className = "w-5 h-5", viewBox = "0 0 24 24") => {
    return (props = {}) => {
      const mergedClass = (className + " " + (props.className || "")).trim();
      return window.React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: props.strokeWidth || 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: mergedClass,
        'aria-hidden': props['aria-label'] ? undefined : 'true',
        'aria-label': props['aria-label'],
        role: props['aria-label'] ? 'img' : undefined,
        style: props.style
      }, pathContent);
    };
  };

  // Helper for React elements inside SVG
  const path = (d, extra = {}) => window.React.createElement('path', { d, ...extra });
  const circle = (cx, cy, r, extra = {}) => window.React.createElement('circle', { cx, cy, r, ...extra });
  const rect = (x, y, width, height, rx = 0, ry = 0) => window.React.createElement('rect', { x, y, width, height, rx, ry });
  const line = (x1, y1, x2, y2) => window.React.createElement('line', { x1, y1, x2, y2 });

  const Icons = {
    Mic: (props) => svgBase([
      path("M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"),
      path("M19 10v2a7 7 0 0 1-14 0v-2"),
      line("12", "19", "12", "22")
    ])(props),

    Camera: (props) => svgBase([
      path("M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"),
      circle("12", "13", "3")
    ])(props),

    Navigation: (props) => svgBase([
      path("m3 11 19-9-9 19-2-8-8-2z")
    ])(props),

    Compass: (props) => svgBase([
      circle("12", "12", "10"),
      path("m16.2 7.8-2 6.4-6.4 2 2-6.4 6.4-2z")
    ])(props),

    Chat: (props) => svgBase([
      path("M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z")
    ])(props),

    Pill: (props) => svgBase([
      path("m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"),
      path("m8.5 8.5 7 7")
    ])(props),

    Globe: (props) => svgBase([
      circle("12", "12", "10"),
      line("2", "12", "22", "12"),
      path("M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z")
    ])(props),

    AlertTriangle: (props) => svgBase([
      path("m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"),
      line("12", "9", "12", "13"),
      line("12", "17", "12.01", "17")
    ])(props),

    ShieldAlert: (props) => svgBase([
      path("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"),
      line("12", "8", "12", "12"),
      line("12", "16", "12.01", "16")
    ])(props),

    Phone: (props) => svgBase([
      path("M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z")
    ])(props),

    PhoneOff: (props) => svgBase([
      path("M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.1 9.91"),
      line("1", "1", "23", "23")
    ])(props),

    Volume2: (props) => svgBase([
      path("M11 5 6 9H2v6h4l5 4V5z"),
      path("M15.54 8.46a5 5 0 0 1 0 7.07"),
      path("M19.07 4.93a10 10 0 0 1 0 14.14")
    ])(props),

    VolumeX: (props) => svgBase([
      path("M11 5 6 9H2v6h4l5 4V5z"),
      line("23", "9", "17", "15"),
      line("17", "9", "23", "15")
    ])(props),

    Eye: (props) => svgBase([
      path("M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"),
      circle("12", "12", "3")
    ])(props),

    Contrast: (props) => svgBase([
      circle("12", "12", "10"),
      path("M12 18a6 6 0 0 0 0-12v12z")
    ])(props),

    MapPin: (props) => svgBase([
      path("M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"),
      circle("12", "10", "3")
    ])(props),

    Clock: (props) => svgBase([
      circle("12", "12", "10"),
      path("M12 6v6l4 2")
    ])(props),

    Check: (props) => svgBase([
      path("M20 6 9 17l-5-5")
    ])(props),

    X: (props) => svgBase([
      line("18", "6", "6", "18"),
      line("6", "6", "18", "18")
    ])(props),

    Send: (props) => svgBase([
      path("m22 2-7 20-4-9-9-4Z"),
      path("M22 2 11 13")
    ])(props),

    Heart: (props) => svgBase([
      path("M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z")
    ])(props),

    Info: (props) => svgBase([
      circle("12", "12", "10"),
      line("12", "16", "12", "12"),
      line("12", "8", "12.01", "8")
    ])(props),

    ChevronRight: (props) => svgBase([
      path("m9 18 6-6-6-6")
    ])(props),

    Sparkles: (props) => svgBase([
      path("m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z")
    ])(props),

    User: (props) => svgBase([
      path("M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"),
      circle("12", "7", "4")
    ])(props),

    Play: (props) => svgBase([
      path("m5 3 14 9-14 9V3z")
    ])(props),

    RotateCcw: (props) => svgBase([
      path("M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"),
      path("M3 3v5h5")
    ])(props),

    Home: (props) => svgBase([
      path("m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"),
      path("M9 22V12h6v10")
    ])(props)
  };

  window.Icons = Icons;
})();
