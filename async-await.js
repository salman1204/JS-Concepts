const hasMeeting = false

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: 'Teachnical Meeting',
      place: 'Google Meet',
      time: '10 AM',
    }
    resolve(meetingDetails)
  } else {
    reject(new Error('Meeting already scheduled'))
  }
})

const addToCalender = (meetingDetails) => {
  const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.place} at ${meetingDetails.time}`
  return Promise.resolve(calender)
}

async function myMeeting() {
  try {
    const meetingDetails = await meeting
    const calender = await addToCalender(meetingDetails)
    console.log(calender)
  } catch {
    console.log('Promise Rejected')
  }
}

myMeeting()

console.log('hello')
