import { createContext, useContext } from "react";
export const StoryContext = createContext({
  active: false,
  birdProgress: 0,
  birdStage: 0,
  birdLandingProgress: 0,
  pipelineStep: -1,
  pipelineProgress: 0,
  next: () => {},
});
export const useStory = () => useContext(StoryContext);
