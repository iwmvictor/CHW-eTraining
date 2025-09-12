import TextReader from './TextReader.jsx';
import VideoPlayer from './VideoPlayer';
import AudioPlayer from './AudioPlayer';

const componentsMap = {
  read: TextReader,
  watch: VideoPlayer,
  listen: AudioPlayer,
};

const LearningContentViewer = ({ lesson, mode, onComplete }) => {
  const Component = componentsMap[mode] || TextReader;

  return (
    <div className="learning-content-viewer">
      <Component lesson={lesson} onComplete={onComplete} />
    </div>
  );
};

export default LearningContentViewer;
