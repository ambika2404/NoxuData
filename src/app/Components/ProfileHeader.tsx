import React from "react";

const ProfileHeader: React.FC = () => {
  return (
    <div
      className="py-8 pl-32 flex relative"
      style={{ width: "1100px", height: "104px", gap: "32px", padding: "32px" }}
    >
      <div
        className="flex items-center"
        style={{
          width: "800px",
          height: "40px",
          gap: "16px",
          marginLeft: "32px",
        }}
      >
        <div
          className="h-8 w-8 rounded-full bg-gray-300 "
          style={{
            width: "40px",
            height: "40px",
            backgroundImage:
              "url(https://wallpapers.com/images/high/pretty-profile-pictures-4t4yfrs4mdh83ck7.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="text-sm"
          style={{
            width: "744px",
            height: "40px",
            gap: "16px",
            padding: "8px 0px 8px 0px",
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#0F172A",
          }}
        >
          List of my top 10 accounts
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
