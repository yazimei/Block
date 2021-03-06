import CanvasNest from './CanvasNest';

const getScriptConfig = () => {
  const scripts = document.getElementsByTagName('script');
  const len = scripts.length;
  const script = scripts[len - 1]; // 当前加载的script
  return {
    zIndex: script.getAttribute('zIndex'),
    opacity: script.getAttribute('opacity'),
    color: script.getAttribute('color'),
    count: Number(script.getAttribute('count')) || 99,
  };
};

new CanvasNest(document.body, getScriptConfig());
