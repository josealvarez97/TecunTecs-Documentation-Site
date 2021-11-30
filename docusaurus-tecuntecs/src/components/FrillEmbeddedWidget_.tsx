//--jsx
import React from 'react';

const FrillEmbeddedWidget_: React.FC = React.memo(() => {
  // This is where the widget will be embedded
  const widgetRef = React.useRef<HTMLDivElement>(null);

  // See ./FrillWidget.tsx for a detailed explanation of the hook
  React.useEffect(() => {
    let widget: FrillWidget;

    const config: FrillConfig = {
      key: 'd64d6407-8367-4fc0-b20b-43fe90a00548', // <-- Add Widget key here
      container: widgetRef.current!,
      callbacks: {
        onReady: (frillWidget) => {
          widget = frillWidget;
        },
      },
    };

    window.Frill_Config = window.Frill_Config || [];
    window.Frill_Config.push(config);

    if ('Frill' in window) {
      widget = window.Frill.widget(config);
    }

    return () => {
      widget?.destroy();
      window.Frill_Config = window.Frill_Config.filter((c) => c !== config);
    };
  }, []);

  return (<div><div ref={widgetRef} className="frill-embedded" /></div>);
});

const FrillEmbeddedWidget = () => {
  return (<div>
<div data-frill-widget="d64d6407-8367-4fc0-b20b-43fe90a00548" style="width: 340px; height: 460px;"></div>
<script async src="https://widget.frill.co/v2/widget.js"></script>
</div>)
};

export default FrillEmbeddedWidget;
