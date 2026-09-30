import * as Speech from 'expo-speech';

export const MAX_SPEECH_CHARS = 4000;

export const splitSpeechText = (text, maxLength = MAX_SPEECH_CHARS) => {
  if (typeof text !== 'string') return [];

  const cleanText = text.replace(/\s+/g, ' ').trim();
  if (!cleanText) return [];
  if (cleanText.length <= maxLength) return [cleanText];

  const chunks = [];
  let start = 0;

  while (start < cleanText.length) {
    let end = Math.min(start + maxLength, cleanText.length);

    if (end < cleanText.length) {
      const lastWhitespace = Math.max(
        cleanText.lastIndexOf(' ', end),
        cleanText.lastIndexOf('\n', end)
      );

      if (lastWhitespace > start + Math.floor(maxLength * 0.7)) {
        end = lastWhitespace + 1;
      }
    }

    const chunk = cleanText.slice(start, end).trim();
    if (chunk) {
      chunks.push(chunk);
    }

    start = end;
  }

  return chunks;
};

export const speakTextInChunks = ({
  text,
  voiceConfig = {},
  onBoundary,
  onDone,
  onError,
}) => {
  const chunks = splitSpeechText(text);

  if (chunks.length <= 1) {
    Speech.speak(chunks[0] || text, {
      ...voiceConfig,
      onBoundary,
      onDone,
      onError,
    });
    return;
  }

  let chunkIndex = 0;
  let totalCharsBeforeCurrentChunk = 0;

  const playNextChunk = () => {
    if (chunkIndex >= chunks.length) {
      onDone?.();
      return;
    }

    const chunk = chunks[chunkIndex];

    Speech.speak(chunk, {
      ...voiceConfig,
      onBoundary: ({ charIndex, ...rest }) => {
        const absoluteIndex = totalCharsBeforeCurrentChunk + charIndex;
        onBoundary?.({ ...rest, charIndex: absoluteIndex });
      },
      onDone: () => {
        totalCharsBeforeCurrentChunk += chunk.length;
        chunkIndex += 1;

        if (chunkIndex < chunks.length) {
          playNextChunk();
        } else {
          onDone?.();
        }
      },
      onError: () => {
        onError?.();
      },
    });
  };

  playNextChunk();
};
