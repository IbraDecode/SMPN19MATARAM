import React from 'react';

const ShimmerBase = () => (
    <div className='absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-slate-200/20 dark:via-slate-700/20 to-transparent'></div>
);

export const TeacherCardShimmer = () => {
    return (
        <div className="relative w-full h-96 rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 p-4">
            <ShimmerBase />
            <div className="absolute bottom-6 left-6 right-6">
                <div className="h-6 w-3/4 rounded bg-slate-300 dark:bg-slate-700 mb-2"></div>
                <div className="h-4 w-1/2 rounded bg-slate-300 dark:bg-slate-700"></div>
            </div>
        </div>
    );
};
