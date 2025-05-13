'use client';

import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { fal } from '@fortawesome/pro-light-svg-icons';

export default function MatrixIntro() {
  const [showSecondPhase, setShowSecondPhase] = useState(false);

  return (
<div className="fixed inset-0 z-[1000] min-h-screen inline-flex flex-col p-10 text-green-400 font-mono text-xl px-4 overflow-hidden backdrop-blur-md bg-black/70">
  {!showSecondPhase && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[1000] min-h-screen inline-flex flex-col p-20 text-green-400 font-mono text-xl px-4 overflow-hidden backdrop-blur-md bg-black/70"
    >
    <span className="inline-flex items-center">
          <Typewriter
            words={[
              'Wake up, Neo...',
            ]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={20}
            delaySpeed={1200    }
            onLoopDone={() => setShowSecondPhase(false)}
          />
          </span>
        </motion.div>
      )}
      

      {/* Phase 2: Verborgen boodschap */}
      {showSecondPhase && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-10"
        >
          <motion.p
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl text-green-300"
          >
            The web is waiting.
          </motion.p>

        </motion.div>
      )}
    </div>
  );
}
