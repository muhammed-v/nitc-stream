import {EyeIcon} from 'lucide-react'
import React from 'react'

export default function StreamPost({
    title, thumbnail, streamer_id, views, streamId
}) {
    return (
        <a href={`/streams/${streamId}`} className=''>
            <div className="card bg-slate-700 w-96 shadow-xl">
            <figure className='bg-[#B4E140] h-20'>
                
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">Live</div>
                </h2>
                <p>
                    <EyeIcon className='size-5'></EyeIcon> {views}
                </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{streamer_id}</div>
                </div>
            </div>
        </div>
        </a>
    )
}
