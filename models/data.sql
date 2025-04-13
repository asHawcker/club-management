--CLUBS

INSERT INTO CLUB (id,name,email,pass_w,pic,room ,funds_alloted,funds_utilised,logo_url,type
) VALUES ("Footlights","footlights@iiitdm.ac.in","footlights",5,"B5","15000","10000","","Cultural"),
("Music club","music@iiitdm.ac.in","music",6,"A3","15000","8000","","Cultural"),
("Dramatics club","dramatics@iiitdm.ac.in","drmatics",7,"A2","40000","30000","","Cultural"),
("Art club","art@iiitdm.ac.in","art",8,"A1","60000","40000","","Cultural"),("SAE","sae@iiitdm.ac.in","sae",1,"C1","300000","250000","","Technical"),
("TAD","tad@iiitdm.ac.in","tad",2,"C2","100000","60000","","Technical"),("Mars","mars@iiitdm.ac.in","mars",3,"B6","800000","450000","","Technical")
("AUV","auv@iiitdm.ac.in","auv",4,"B7","1200000","750000","","Technical");


--PIC 

INSERT INTO PIC(id,name,email,pass_w) VALUES (1,"Jagdesh K","jagdesh@iiitdm.ac.in","jagdesh"),(2,"Karthick C","karthick@iiitdm.ac.in","karthick"),
(3,"Ashok R","ashok@iiitdm.ac.in","ashok"),(4,"Nagamani K","nagamani@iiitdm.ac.in","nagamani"),
(5,"Jaybal K","jaybal@iiitdm.ac.in","jaybal"),(6,"Jayshree M","jayshree@iiitdm.ac.in","jayshree"),
(7,"Kokila J","kokila@iiitdm.ac.in","kokila"),(8,"Nachiketa M","nachiketa@iiitdm.ac.in","nachiketa");


--EVENT 

INSERT INTO EVENT(uid,name,funds_Alloted,club) INTO (1,"Maze rover",10000,"Mars"),(2,"Groovy moovy",8000,"Footlights"),(3,"Artizer",3000,"Art club"),
(4,"Best vocals",3000,"Music Club"),(5,"Under water",7000,"AUV"),(6,"Racers",15000,"SAE");


--COMPETITIONS

INSERT INTO COMPETITIONS (uid,name,description,winners,prize_pool,club) INTO (1,"IRC","Rover chalenge","5th Internationally",200000,"Mars"),
(2,"UWC","Under water chalenge","5th-International, 2nd-National",700000,"AUV"),(3,"On Stage","Drama on stage live competition","Participated",0,"Dramatics Club"),
(4,"Dance on Beat","A face off challenge on a random song","7th- Akshaya, 10th- Anurag",5000,"Footlights");


--SPONSORS 

INSERT INTO SPONSOR(id, value,from_Company,club) INTO (1,20000,"Robotics company","Mars"),(2,30000,"Robotics company","AUV"),(3,40000,"Vechical company","SAE"),
(4,50000,"Avial company","TAD"),(5,15000,"Theaterics","Dramatics Club"),(6,10000,"Musical company","Music Club");


--FUNDS

INSERT INTO FUNDS(id,value,timestamp,club) INTO INSERT INTO FUNDS(id, value, timestamp, club) VALUES
(1, 2000, "25/1/24 09:00:37", "Mars"),
(2, 5000, "25/2/24 07:00:37", "Mars"),
(3, 7000, "25/1/04 09:07:39", "AUV"),
(4, 500,  "25/6/02 10:00:37", "Footlights"),
(5, 3000, "25/7/04 09:30:37", "SAE"),
(6, 500,  "25/10/16 17:03:37", "SAE"),
(7, 30000,"25/12/20 19:00:00", "Dramatics Club"),
(8, 80000,"24/3/07 20:19:19", "AUV"),
(9, 7000, "25/10/24 21:10:37", "AUV"),
(10, 300, "25/1/22 09:00:00", "Music Club"),
(11, 10000, "25/3/15 10:30:00", "Mars"),
(12, 12000, "25/4/10 11:00:00", "Footlights"),
(13, 8500, "25/5/21 13:20:15", "SAE"),
(14, 45000, "25/6/30 16:45:00", "Dramatics Club"),
(15, 2000, "25/8/18 08:15:45", "Music Club"),
(16, 6000, "25/9/25 14:50:30", "TAD"),
(17, 7000, "25/11/11 15:00:00", "TAD"),
(18, 1000, "25/2/17 12:00:00", "Art Club"),
(19, 2500, "25/3/28 09:40:00", "Art Club"),
(20, 5500, "25/4/08 18:10:10", "Dramatics Club");



--ASSET

INSERT INTO ASSET(id,name,description,value,image,club) VALUES INSERT INTO ASSET(id, name, description, value, image, club) VALUES
(1, "6-Wheel Suspension Assembly", "Suspension system for Mars rover prototype", 18000.00, '', "Mars"),
(2, "Onboard Computer Unit", "Core computational unit for autonomous vehicle", 10000.00, '', "AUV"),
(3, "Robotic Arm", "Multi-axis robotic arm for manipulation tasks", 15000.00, '', "SAE"),
(4, "Solar Panel Array", "Power source for rover prototypes", 9000.00, '', "TAD"),
(5, "Sound Mixer Console", "Used for balancing audio inputs and outputs", 12000.00, '', "Music Club"),
(6, "Stage Lighting System", "Advanced lights for theater and stage plays", 9500.00, '', "Footlights"),
(7, "Makeup Kit", "Professional makeup kit for stage performances", 3000.00, '', "Dramatics Club"),
(8, "Canvas Stand Set", "Set of easels for painting and art displays", 4000.00, '', "Art Club");


--MEMBERS

INSERT INTO MEMBERS(id,name,email,club,position) VALUES INSERT INTO MEMBERS(id, name, email, club, position) VALUES
(1, "Akshaya", "cs23b1075@iiitdm.ac.in", "Mars", "member"),
(2, "Avichal", "cs23b1076@iiitdm.ac.in", "Mars", "member"),
(3, "Anushaya", "cs23b1077@iiitdm.ac.in", "Mars", "member"),
(4, "Shriya", "cs23b1082@iiitdm.ac.in", "Mars", "member"),
(5, "Meera", "cs23b1087@iiitdm.ac.in", "Mars", "member"),
(6, "Avichal", "cs23b1078@iiitdm.ac.in", "Mars", "Lead"),
(7, "Anurag", "cs23b1083@iiitdm.ac.in", "AUV", "Lead"),
(8, "Pavan", "cs23b1088@iiitdm.ac.in", "AUV", "member"),
(9, "Krishna", "cs23b1079@iiitdm.ac.in", "AUV", "member"),
(10, "Karthik", "cs23b1084@iiitdm.ac.in", "AUV", "member"),
(11, "Subashree", "cs23b1089@iiitdm.ac.in", "AUV", "member"),
(12, "Jahnavi", "cs23b1080@iiitdm.ac.in", "SAE", "member"),
(13, "Sundar", "cs23b1085@iiitdm.ac.in", "SAE", "Lead"),
(14, "John", "cs23b1090@iiitdm.ac.in", "SAE", "member"),
(15, "Manas", "cs23b1081@iiitdm.ac.in", "TAD", "Lead"),
(16, "Vashisht", "cs23b1086@iiitdm.ac.in", "TAD", "member"),
(17, "Ranveer", "cs23b1091@iiitdm.ac.in", "TAD", "member"),
(18, "Pratik", "cs23b1009@iiitdm.ac.in", "Music Club", "Lead"),
(19, "Bhuvana", "cs23b1001@iiitdm.ac.in", "Music Club", "member"),
(20, "Satish", "cs23b1006@iiitdm.ac.in", "Music Club", "member"),
(21, "Ramya", "cs23b1019@iiitdm.ac.in", "Footlights", "Lead"),
(22, "Surya", "cs23b1009@iiitdm.ac.in", "Footlights", "member"),
(23, "Aarav", "cs23b1010@iiitdm.ac.in", "Footlights", "member"),
(24, "Diya", "cs23b1011@iiitdm.ac.in", "Footlights", "member"),
(25, "Karan", "cs23b1012@iiitdm.ac.in", "Footlights", "member"),
(26, "Meera", "cs23b1013@iiitdm.ac.in", "Footlights", "member"),
(27, "Rohan", "cs23b1014@iiitdm.ac.in", "Footlights", "member"),
(28, "Anika", "cs23b1015@iiitdm.ac.in", "Footlights", "member"),
(29, "Aarav", "cs23b1010@iiitdm.ac.in", "Dramatics Club", "Lead"),
(30, "Diya", "cs23b1011@iiitdm.ac.in", "Dramatics Club", "member"),
(31, "Karan", "cs23b1012@iiitdm.ac.in", "Dramatics Club", "member"),
(32, "Meera", "cs23b1013@iiitdm.ac.in", "Dramatics Club", "member"),
(33, "Rohan", "cs23b1014@iiitdm.ac.in", "Dramatics Club", "member"),
(34, "Anika", "cs23b1015@iiitdm.ac.in", "Dramatics Club", "member"),
(35, "Neha", "cs23b1020@iiitdm.ac.in", "Art Club", "member"),
(36, "Raj", "cs23b1021@iiitdm.ac.in", "Art Club", "Lead"),
(37, "Sneha", "cs23b1022@iiitdm.ac.in", "Art Club", "member"),
(38, "Aditya", "cs23b1023@iiitdm.ac.in", "Art Club", "member"),
(39, "Pooja", "cs23b1024@iiitdm.ac.in", "Art Club", "member"),
(40, "Vikram", "cs23b1025@iiitdm.ac.in", "Art Club", "member");



