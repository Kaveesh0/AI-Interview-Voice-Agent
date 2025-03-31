// @/components/Agent.tsx
import React from "react";

interface AgentProps {
  userName: string;
  userId: string | undefined;
  profileImage: string | undefined;  // Type the profileImage as string | undefined
  type: "generate";
}

const Agent: React.FC<AgentProps> = ({ userName, userId, profileImage, type }) => {
  return (
    <div>
      <h4>{userName}</h4>
      {profileImage && <img src={profileImage} alt={userName} />}
      <p>User ID: {userId}</p>
      <p>Type: {type}</p>
    </div>
  );
};

export default Agent;
