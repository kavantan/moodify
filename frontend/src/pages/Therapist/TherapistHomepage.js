import { useEffect, useState } from "react";
import TherapistConsultSlots from "../../components/TherapistConsult/TherapistConsultSlots";
import TherapistNavbar from "../../components/TherapistNavbar"
import "../../styles/Therapists/Therapists.css"
import { getSortedUpcoming } from "../../utils/private/invokeBackend";

const TherapistHomepage = () => {
    let [consultationSlots, setConsultationSlots] = useState([]);

    // consultationSlots = [
    //     { date: new Date("2023-07-11 09:00:00"), name: "Dr. Tan" },
    //     { date: new Date("2023-07-12 10:00:00"), name: "Dr. Chan" },
    // ];

    useEffect(() => {
        getMeetingsData();
      }, []);
    
      const getMeetingsData = async () => {
        console.log("here");
        const meetingData = await getSortedUpcoming({ isUser: true });
        console.log(meetingData.data);
        setConsultationSlots(meetingData.data);
      };

    // useEffect(() => {
    //   async function fetchMeetings() {
    //     const upcomingMeetings = await getSortedUpcoming();
    //     setConsultationSlots(upcomingMeetings);
    //     if (upcomingMeetings === []) {
    //         return;
    //     }
    //   }
    //   fetchMeetings();
    // }, []);

    return (
        <>
            <TherapistNavbar />
            <div className="meetings-container">
                <br></br>
                <TherapistConsultSlots
                    consultationSlots={consultationSlots}
                />
            </div>
        </>
    )
}

export default TherapistHomepage
