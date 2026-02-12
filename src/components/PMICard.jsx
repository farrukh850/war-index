import React from 'react';

function PMICard({
    pmiScore,
    title,
    tags = [],
    contractCount,
    onBookmark,
    scoreBgColor
}) {
    return (
        <div className="p-6 rounded-2xl border border-bg-active">
            <div className="flex items-center justify-between mb-5">
                <h3
                    className="text-lg text-dark-primary font-semibold py-1 px-4 rounded-lg inline-block"
                    style={{ backgroundColor: scoreBgColor }}
                >
                    {pmiScore} PMI Score
                </h3>
                <button
                    className="w-12 h-11 rounded-md border border-bg-active flex items-center justify-center cursor-pointer hover:bg-bg-primary-alt transition duration-300"
                    onClick={onBookmark}
                    aria-label="Bookmark"
                >
                    <img src="/images/bookmark.svg" alt="Bookmark"/>
                </button>
            </div>
            <h4 className="text-xl text-text-primary font-semibold mb-3">{title}</h4>
            <div className="flex items-center gap-2 flex-wrap mb-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="py-1 px-2 text-sm text-text-secondary font-medium border border-border-primary rounded-md"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <p className="text-base text-text-tertiary font-semibold">{contractCount} Contracts</p>
        </div>
    );
}

export default PMICard;
