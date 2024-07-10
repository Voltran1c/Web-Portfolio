import { useEffect } from "react";

const ScrollOnUserActionComponent = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      // ระยะที่ผู้ใช้เลื่อน
      const deltaY = event.deltaY;
      // ความสูงของหน้าจอปัจจุบัน
      const screenHeight = window.innerHeight;
      // ถ้าเลื่อนลง
      if (deltaY > 0) {
        window.scrollBy({
          top: screenHeight,
          left: 0,
          behavior: "smooth",
        });
      }
      // ถ้าเลื่อนขึ้น
      else if (deltaY < 0) {
        window.scrollBy({
          top: -screenHeight,
          left: 0,
          behavior: "smooth",
        });
      }
      // ป้องกันการเลื่อนเริ่มต้น
      event.preventDefault();
    };

    // เพิ่ม event listener สำหรับการ scroll
    window.addEventListener("wheel", handleScroll, { passive: false });

    // ล้าง event listener เมื่อคอมโพเนนต์ถูก unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return <div></div>;
};

export default ScrollOnUserActionComponent;
