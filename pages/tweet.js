import { TwitterTimelineEmbed } from 'react-twitter-embed'
export default function Tweet() {
  return (
    <div className="h-screen">
      <TwitterTimelineEmbed autoHeight screenName="rafa_ar_id" sourceType="profile" />
    </div>
  )
}
