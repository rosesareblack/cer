import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";

interface InstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructionModal: React.FC<InstructionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-200 ease-out ${
        isOpen 
          ? 'backdrop-blur-sm bg-black/60 opacity-100' 
          : 'backdrop-blur-none bg-black/0 opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`bg-gray-900 border border-gray-700 rounded-xl shadow-2xl relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-200 ease-out ${
          isOpen 
            ? 'scale-100 opacity-100 translate-y-0' 
            : 'scale-95 opacity-0 translate-y-2'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Instructions</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg p-2 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="text-gray-300 leading-relaxed">
            <p>
              This chatbot demonstrates a simple RAG pattern using{" "}
              <a 
                href="https://pinecone.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 decoration-blue-400/50 hover:decoration-blue-300 transition-colors duration-150"
              >
                Pinecone
              </a>{" "}
              and Vercel&apos;s AI SDK. In the context panel on the right, you can
              see some articles you can index in Pinecone (on mobile, open the
              context panel by clicking the button at the top left of the message
              panel). Click on the blue link icons to open the URLs in a new window.
            </p>
          </div>
          
          <div className="text-gray-300 leading-relaxed">
            <p>
              After you index them, you can ask the chatbot questions about the
              specifics of each article. The segments relevant to the answers the
              chatbot gives will be highlighted.
            </p>
          </div>
          
          <div className="text-gray-300 leading-relaxed">
            <p>
              You can clear the index by clicking the &quot;Clear Index&quot; button
              in the context panel.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-700">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionModal;
