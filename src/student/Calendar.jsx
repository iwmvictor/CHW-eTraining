import { CalendarProvider } from "./../contexts/CalendarContext";
import { EventProvider } from "./../contexts/EventContext";
import Sidebar from "./../components/Sidebar/Sidebar";
import MainContent from "./../components/MainContent/MainContent";
import FloatingActionButton from "./../components/FloatingActionButton/FloatingActionButton";
import EventFormDialog from "./../components/Dialogs/EventFormDialog";
import EventDetailsDialog from "./../components/Dialogs/EventDetailsDialog";
import EventDeleteDialog from "./../components/Dialogs/EventDeleteDialog";
import MobileSidebar from "./../components/MobileSidebar/MobileSidebar";
import Toaster from "./../components/Toaster/Toaster";
import styles from "./../style/App.module.scss";

const StudentCalendarPage = () => {
  return (
    <>
      <div className="dashboard">
        <div className="student-calendar-page">
          <div className="container">
            <div className="content">
              <EventProvider>
                <CalendarProvider>
                  <div className={styles.app}>
                    <Sidebar />
                    <MainContent />
                    <FloatingActionButton />
                    <EventFormDialog />
                    <EventDetailsDialog />
                    <EventDeleteDialog />
                    <MobileSidebar />
                    <Toaster />
                  </div>
                </CalendarProvider>
              </EventProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCalendarPage;
