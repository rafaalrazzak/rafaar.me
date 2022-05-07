import * as timeago from 'timeago.js'
import Time from 'timeago-react'
import en from 'timeago.js/lib/lang/en_US'
import id from 'timeago.js/lib/lang/id_ID'
timeago.register('en', en)
timeago.register('id', id)

export default function TimeAgo({ datetime, locale, className }) {
  return <Time datetime={datetime} className={className} locale={locale} />
}
