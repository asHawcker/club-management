
INSERT INTO PIC(id, name, email, pass_w) VALUES
(1, "Jagdesh K", "jagdesh@iiitdm.ac.in", "jagdesh"),
(2, "Karthick C", "karthick@iiitdm.ac.in", "karthick"),
(3, "Ashok R", "ashok@iiitdm.ac.in", "ashok"),
(4, "Nagamani K", "nagamani@iiitdm.ac.in", "nagamani"),
(5, "Jaybal K", "jaybal@iiitdm.ac.in", "jaybal"),
(6, "Jayshree M", "jayshree@iiitdm.ac.in", "jayshree");



--CLUBS

INSERT INTO CLUB (id,name,email,pass_w,pic,room ,funds_alloted,funds_utilised,logo_url,type
) VALUES (1,"Footlights","footlights@iiitdm.ac.in","footlights",5,"B5","15000","10000","","Cultural"),
(2,"Music club","music@iiitdm.ac.in","music",6,"A3","15000","8000","","Cultural"),
(3,"Dramatics club","dramatics@iiitdm.ac.in","drmatics",1,"A2","40000","30000","","Cultural"),
(4,"Art club","art@iiitdm.ac.in","art",1,"A1","60000","40000","","Cultural"),(5,"SAE","sae@iiitdm.ac.in","sae",1,"C1","300000","250000","","Technical"),
(6,"TAD","tad@iiitdm.ac.in","tad",2,"C2","100000","60000","","Technical"),(7,"Mars","mars@iiitdm.ac.in","mars",3,"B6","800000","450000","","Technical")
(,"AUV","auv@iiitdm.ac.in","auv",4,"B7","1200000","750000","","Technical");



--EVENT 

INSERT INTO EVENT(uid, name, funds_alloted, club) VALUES
(1, "Maze rover", 10000, 7),
(2, "Groovy moovy", 8000, 1),
(3, "Artizer", 3000, 4),
(4, "Best vocals", 3000, 2),
(5, "Under water", 7000, 8),
(6, "Racers", 15000, 5),
(7, "Solar Dash", 12000, 7),
(8, "Beat Battle", 7000, 2),
(9, "Art Carnival", 5000, 4),
(10, "Stage Storm", 8000, 3),
(11, "Drag Race", 20000, 5),
(12, "Theatrical Showdown", 10000, 3),
(13, "Canvas Clash", 4000, 4),
(14, "Aqua Bot Wars", 15000, 8),
(15, "Fusion Night", 6000, 1),
(16, "Mechanical Mayhem", 17000, 5),
(17, "Code Mars", 13000, 7),
(18, "Underwater Maze", 14000, 8),
(19, "Light it Up", 9000, 1),
(20, "Musical Showdown", 6000, 2),
(21, "Doodle Wars", 5500, 4),
(22, "Thespian Trials", 8500, 3),
(23, "Electric Avenue", 16000, 6),
(24, "Rock On", 9500, 2),
(25, "Art Fest", 4500, 4),
(26, "Stagecraft", 8000, 3);


--COMPETITIONS

INSERT INTO COMPETITIONS(uid, name, description, winners, prize_pool, club) VALUES
(1, "IRC", "Rover challenge", "5th Internationally", 200000, 7),
(2, "UWC", "Underwater challenge", "5th-International, 2nd-National", 700000, 8),
(3, "On Stage", "Drama on stage live competition", "Participated", 0, 3),
(4, "Dance on Beat", "A face-off challenge on a random song", "7th- Akshaya, 10th- Anurag", 5000, 1),
(5, "Code Commander", "AI programming contest on rover navigation", "Winner - Mars Team Alpha", 150000, 7),
(6, "HydroQuest", "Autonomous navigation in aquatic environments", "Runner-Up - DeepDive Team", 180000, 8),
(7, "Echo Wars", "Live music remixing face-off", "1st - Team Sonic Boom", 10000, 2),
(8, "PaintSplash", "On-the-spot abstract art challenge", "1st - Neha", 8000, 4),
(9, "Improv Clash", "Quick theme-based dramatics", "Winner - Drama Squad", 6000, 3),
(10, "Quad Sprint", "Electric quad bike time trial", "Top Speed - SAE Velocity", 220000, 5),
(11, "Robo Gladiator", "Arena combat bots competition", "Winner - Mars Team Blaze", 180000, 7),
(12, "SoundSculpt", "Experimental music composition event", "1st - Satish", 5000, 2),
(13, "Brush-Off", "Live painting battle", "Champion - Sneha", 7000, 4),
(14, "MonoAct", "Solo performance based on given emotion", "Best Performer - Diya", 3000, 3),
(15, "Mech Mania", "Mechanical design and stress-test challenge", "Winner - SAE T-Bone", 250000, 5),
(16, "Hydro Hack", "Solving marine robotics problems in real-time", "Team AquaStorm", 120000, 8),
(17, "Vocal Valor", "Solo singing competition", "Top Performer - Bhuvana", 4000, 2),
(18, "Stage Whiz", "Script writing and roleplay", "1st - Karan & Team", 3500, 3),
(19, "Creative Canvas", "Theme-based poster making", "Top Artist - Pooja", 3000, 4),
(20, "Dance Craze", "Freestyle team dance contest", "Winners - Team Pulse", 6000, 1),
(21, "Ignition Wars", "Combustion engine tuning face-off", "1st - SAE Nitro", 200000, 5),
(22, "Bot Rally", "Maze solving speed bots", "Fastest Time - Mars Turbo", 170000, 7),
(23, "Aquabot Arena", "Obstacle race for underwater drones", "Winner - BlueDepth", 160000, 8),
(24, "Flash Drama", "Short skits under 5 minutes", "Best Act - Team LightsOut", 4000, 3);



--SPONSORS 

INSERT INTO SPONSOR(id, value, from_company, club) VALUES
(1, 20000, "Robotics company", 7),
(2, 30000, "Robotics company", 8),
(3, 40000, "Vehicle company", 5),
(4, 50000, "Avial company", 6),
(5, 15000, "Theatrics", 3),
(6, 10000, "Musical company", 2),
(7, 25000, "NextGen Robotics", 7),
(8, 35000, "AquaTech Industries", 8),
(9, 15000, "StageCraft Ltd.", 1),
(10, 12000, "Harmony Audio Systems", 2),
(11, 22000, "Paint & Hue Co.", 4),
(12, 18000, "Stage Magic", 3),
(13, 27000, "DriveLine Motors", 5),
(14, 45000, "HydroWorks Pvt Ltd", 8),
(15, 33000, "Cosmic Robotics", 7),
(16, 16000, "EchoGear Inc.", 2),
(17, 11000, "Canvas & Colors", 4),
(18, 25000, "DramaHouse Enterprises", 3),
(19, 14000, "FlexMech Corp", 5),
(20, 30000, "RoboNation", 7),
(21, 24000, "Vocal Vibes", 2),
(22, 21000, "AutoTrack Systems", 5),
(23, 38000, "DeepOcean AI", 8),
(24, 13000, "Theater Vibes Ltd", 3),
(25, 17000, "Creative Brushes", 4),
(26, 20000, "NovaTech", 6);

--FUNDS

INSERT INTO FUNDS(id, value, timestamp, club) VALUES
(1, 2000, "25/1/24 09:00:37", 7),
(2, 5000, "25/2/24 07:00:37", 7),
(3, 7000, "25/1/04 09:07:39", 8),
(4, 500,  "25/6/02 10:00:37", 1),
(5, 3000, "25/7/04 09:30:37", 5),
(6, 500,  "25/10/16 17:03:37", 5),
(7, 30000,"25/12/20 19:00:00", 3),
(8, 80000,"24/3/07 20:19:19", 8),
(9, 7000, "25/10/24 21:10:37", 8),
(10, 300, "25/1/22 09:00:00", 2),
(11, 10000, "25/3/15 10:30:00", 7),
(12, 12000, "25/4/10 11:00:00", 1),
(13, 8500, "25/5/21 13:20:15", 5),
(14, 45000, "25/6/30 16:45:00", 3),
(15, 2000, "25/8/18 08:15:45", 2),
(16, 6000, "25/9/25 14:50:30", 6),
(17, 7000, "25/11/11 15:00:00", 6),
(18, 1000, "25/2/17 12:00:00", 4),
(19, 2500, "25/3/28 09:40:00", 4),
(20, 5500, "25/4/08 18:10:10", 3),
INSERT INTO FUNDS(id, value, timestamp, club) VALUES
(21, 4000, "25/5/10 12:30:00", 1),
(22, 15000, "25/6/15 14:00:00", 2),
(23, 1800, "25/7/01 10:45:00", 4),
(24, 2200, "25/7/20 09:10:30", 3),
(25, 3000, "25/8/05 16:25:00", 2),
(26, 7200, "25/9/12 11:50:10", 8),
(27, 5100, "25/10/10 18:00:00", 7),
(28, 9400, "25/10/29 07:30:00", 6),
(29, 2300, "25/11/07 13:45:15", 5),
(30, 8700, "25/12/03 20:15:00", 4),
(31, 16000, "25/12/24 17:00:00", 3),
(32, 3500, "26/1/10 08:30:00", 6),
(33, 9200, "26/2/01 15:20:45", 5),
(34, 600, "26/2/20 09:00:00", 1),
(35, 25000, "26/3/14 13:30:00", 7),
(36, 1200, "26/3/29 11:00:00", 2),
(37, 5000, "26/4/05 14:15:00", 8),
(38, 4800, "26/4/20 10:00:00", 3),
(39, 7500, "26/5/01 16:30:30", 4),
(40, 300, "26/5/15 18:20:00", 1);




--ASSET

INSERT INTO ASSET(id, name, description, value, image, club) VALUES
(1, "6-Wheel Suspension Assembly", "Suspension system for Mars rover prototype", 18000.00, '', 7),
(2, "Onboard Computer Unit", "Core computational unit for autonomous vehicle", 10000.00, '', 8),
(3, "Robotic Arm", "Multi-axis robotic arm for manipulation tasks", 15000.00, '', 5),
(4, "Solar Panel Array", "Power source for rover prototypes", 9000.00, '', 6),
(5, "Sound Mixer Console", "Used for balancing audio inputs and outputs", 12000.00, '', 2),
(6, "Stage Lighting System", "Advanced lights for theater and stage plays", 9500.00, '', 1),
(7, "Makeup Kit", "Professional makeup kit for stage performances", 3000.00, '', 3),
(8, "Canvas Stand Set", "Set of easels for painting and art displays", 4000.00, '', 4),
(9, "AI Navigation Module", "Artificial intelligence module for autonomous navigation", 22000.00, '', 7),
(10, "Waterproof Sensor Kit", "Sensor kit for underwater environment testing", 8000.00, '', 8),
(11, "Chassis Frame", "High-strength frame for race car prototype", 14000.00, '', 5),
(12, "3D Printer", "Used for prototyping mechanical parts", 25000.00, '', 6),
(13, "Digital Keyboard", "Used for music composition and performance", 11000.00, '', 2),
(14, "LED Flood Lights", "Lighting equipment for large stage events", 7000.00, '', 1),
(15, "Costume Rack", "Storage for theater costumes", 3500.00, '', 3),
(16, "Oil Paint Set", "High-quality oil paints for advanced artworks", 5000.00, '', 4),
(17, "Thermal Camera", "Thermal imaging camera for rover diagnostics", 16000.00, '', 7),
(18, "Underwater Drone", "Mini drone for submerged exploration", 30000.00, '', 8),
(19, "Engine Test Bench", "Platform to test car engines", 28000.00, '', 5),
(20, "Laser Cutter", "Used for precision material cutting", 27000.00, '', 6),
(21, "Microphone Set", "High-quality microphones for musical recordings", 6000.00, '', 2),
(22, "Backdrop System", "Adjustable stage backdrops for plays", 5500.00, '', 1),
(23, "Fog Machine", "Creates fog effects for stage performances", 4000.00, '', 3),
(24, "Sculpting Toolkit", "Professional tools for clay and sculpture work", 4500.00, '', 4),
(25, "Radiation Shield", "Protective equipment for space prototypes", 9500.00, '', 7),
(26, "Sonar Module", "Underwater sonar detection system", 13000.00, '', 8),
(27, "CNC Machine", "Used for manufacturing vehicle parts", 35000.00, '', 5),
(28, "Power Supply Unit", "Stable energy supply system for TAD lab", 17000.00, '', 6);



--MEMBERS

INSERT INTO MEMBERS(id,name,email,club,position) VALUES
(1, "Akshaya", "cs23b1075@iiitdm.ac.in", 7, "member"),
(2, "Avichal", "cs23b1076@iiitdm.ac.in", 7, "member"),
(3, "Anushaya", "cs23b1077@iiitdm.ac.in", 7, "member"),
(4, "Shriya", "cs23b1082@iiitdm.ac.in", 7, "member"),
(5, "Meera", "cs23b1087@iiitdm.ac.in", 7, "member"),
(6, "Avichal", "cs23b1078@iiitdm.ac.in", 7, "Lead"),
(7, "Anurag", "cs23b1083@iiitdm.ac.in", 4, "Lead"),
(8, "Pavan", "cs23b1088@iiitdm.ac.in", 4, "member"),
(9, "Krishna", "cs23b1079@iiitdm.ac.in", 4, "member"),
(10, "Karthik", "cs23b1084@iiitdm.ac.in", 4, "member"),
(11, "Subashree", "cs23b1089@iiitdm.ac.in", 4, "member"),
(12, "Jahnavi", "cs23b1080@iiitdm.ac.in", 3, "member"),
(13, "Sundar", "cs23b1085@iiitdm.ac.in", 3, "Lead"),
(14, "John", "cs23b1090@iiitdm.ac.in", 3, "member"),
(15, "Manas", "cs23b1081@iiitdm.ac.in", 6, "Lead"),
(16, "Vashisht", "cs23b1086@iiitdm.ac.in", 6, "member"),
(17, "Ranveer", "cs23b1091@iiitdm.ac.in", 6, "member"),
(18, "Pratik", "cs23b1009@iiitdm.ac.in", 2, "Lead"),
(19, "Bhuvana", "cs23b1001@iiitdm.ac.in", 2, "member"),
(20, "Satish", "cs23b1006@iiitdm.ac.in", 2, "member"),
(21, "Ramya", "cs23b1019@iiitdm.ac.in", 1, "Lead"),
(22, "Surya", "cs23b1009@iiitdm.ac.in", 1, "member"),
(23, "Aarav", "cs23b1010@iiitdm.ac.in", 1, "member"),
(24, "Diya", "cs23b1011@iiitdm.ac.in", 1, "member"),
(25, "Karan", "cs23b1012@iiitdm.ac.in", 1, "member"),
(26, "Meera", "cs23b1013@iiitdm.ac.in", 1, "member"),
(27, "Rohan", "cs23b1014@iiitdm.ac.in", 1, "member"),
(28, "Anika", "cs23b1015@iiitdm.ac.in", 1, "member"),
(29, "Aarav", "cs23b1010@iiitdm.ac.in", 5, "Lead"),
(30, "Diya", "cs23b1011@iiitdm.ac.in", 5, "member"),
(31, "Karan", "cs23b1012@iiitdm.ac.in", 5, "member"),
(32, "Meera", "cs23b1013@iiitdm.ac.in", 5, "member"),
(33, "Rohan", "cs23b1014@iiitdm.ac.in", 5, "member"),
(34, "Anika", "cs23b1015@iiitdm.ac.in", 5, "member"),
(35, "Neha", "cs23b1020@iiitdm.ac.in", 4, "member"),
(36, "Raj", "cs23b1021@iiitdm.ac.in", 4, "Lead"),
(37, "Sneha", "cs23b1022@iiitdm.ac.in", 4, "member"),
(38, "Aditya", "cs23b1023@iiitdm.ac.in", 4, "member"),
(39, "Pooja", "cs23b1024@iiitdm.ac.in", 4, "member"),
(40, "Vikram", "cs23b1025@iiitdm.ac.in", 4, "member");
