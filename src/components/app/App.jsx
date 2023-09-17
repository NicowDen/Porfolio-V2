import mc from "./app.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//HOME//
import Home from "../home/Home";

const App = () => {
  const dispatch = useDispatch();

  //==get window width==/
  const updateWindowWidth = () => {
    const windowSize = window.innerWidth;
    dispatch({
      type: "GET_WINDOW_WIDTH",
      payload: { wWidth: windowSize },
    });
  };

  useEffect(() => {
    updateWindowWidth();
    const handleWindowResize = () => {
      updateWindowWidth();
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [dispatch]);

  //==get window height==/
  const updateWindowHeight = () => {
    const windowHeight = window.innerHeight;
    dispatch({
      type: "GET_WINDOW_HEIGHT",
      payload: { wHeight: windowHeight },
    });
  };

  useEffect(() => {
    updateWindowHeight();
    const handleWindowResize = () => {
      updateWindowHeight();
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [dispatch]);

  //==get scroll position==//
  const updateScrollPosition = () => {
    const scrollPosition = window.scrollY;
    dispatch({
      type: "UPDATE_SCROLL_POSITION",
      payload: { scrollPosition: scrollPosition },
    });
  };

  useEffect(() => {
    updateScrollPosition();
    const scrollMove = () => {
      updateScrollPosition();
    };
    window.addEventListener("scroll", scrollMove);
    return () => {
      window.removeEventListener("scroll", scrollMove);
    };
  }, [dispatch]);

  return (
    <div id="test" className={mc.container}>
      <Home />
    </div>
  );
};

export default App;
