export * from './halt.signal';
export * from './mode';

export * from './editor.mode';
export * from './popout.mode';

import InteractiveMode from './interactive.mode';
import EditorMode from './editor.mode';
import PopoutMode from './popout.mode';
import PreviewMode from './preview.mode';
import PreviewCandidateMode from './preview-candidate.mode';
import QAMode from './qa.mode';

export const modes = [
	EditorMode,
	InteractiveMode,
	PopoutMode,
	PreviewMode,
	PreviewCandidateMode,
	QAMode
];

export default modes;
