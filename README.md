<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Suardhito's Webpage</title>
    <link rel="stylesheet" href="style.css" type="text/css" media="screen" title="no title" charset="utf-8">
  </head>
  <body>
    <!-- Header part -->
    <div class="header">
      <h1>Suardhito's website</h1>
      <h2>Welcome everyone!</h2>
    </div>
    <!-- body is the main part --> 
    <div class="body">
      <img class="profile-picture" img src="Profile-Picture/suardhito-profile.png" alt="suardhito-profile" title="suardhito-profile" width="640" height="640" />  
      <p>
        <b>Hello everyone my name is Suardhito Ihsan Pratama, you can call me Dhito. I never learn coding before but i have to. This is my first webpage at HACKTIV8 course :). Let's be a successful full-stack developer with Hacktiv8. Enjoy!</b>
      </p>
      <p>
        <b>This is my target list :</b>
      </p>
      <ul>
        <li>Being a full-stack developer</li>
        <li>Create wonderfull mobile app and website</li>
        <li>Make many useful apps</li>
      </ul>
      <p>
        <b>Here is my contact</b>
      </p>
      <ol>
        <li>Email : Suardhito12@gmail.com</li>
        <li>Phone : +6285780033295</li>
      </ol>
      <p>
        <b>My daily routine : </b>
      </p>
      <table class="routine">
        <th>
          <td>Morning</td>
          <td>Afternood</td>
          <td>Evening</td>
          <td>Night</td>
        </th>
        <tbody>
          <tr>
            <td>Monday</td>
            <td colspan="4" rowspan="7" class="table-text">Eat, Code, Sleep,& Repeat</td>
          </tr>
          <tr>
            <td>Tuesday</td>
          </tr>
          <tr>
            <td>Wednesday</td>
          </tr>
          <tr>
            <td>Thursday</td>
          </tr>
          <tr>
            <td>Friday</td>
          </tr>
          <tr>
            <td>Saturday</td>
          </tr>
          <tr>
            <td>Sunday</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Comment section  -->
    <div class="comment">
      <h4>Leave your comment below</h4>
      <form action="/api/contact" method="post">
        <!-- Form elements -->
        <label for="first-name">First name</label>
        <br/>
        <input type="text" name="first-name" value="">
        <br/>
        <label for="last-name">Last name</label>
        <br/>
        <input type="text" name="last-name" value="">
        <br/>
        <label for="gender">Gender:</label>
        <br/>
        <input id="male-radio" type="radio" name="gender" value="male">
        <label for="male-radio">Male</label>
        <br/>
        <input id="female-radio" type="radio" name="gender" value="female">
        <label for="female-radio">Female</label>
        <br/>
        <input id="other-radio" type="radio" name="gender" value="other">
        <label for="other-radio">Other</label>
        <br/>
        <label for="programming">Favorite Motorcycle</label>
        <br/>
           <select id="suggestion" name="carList">
             <option value="Kawasaki">Kawasaki</option>
             <option value="Ducati">Ducati</option>
             <option value="BMW">BMW</option>
             <option value="Yamaha">Yamaha</option>
           </select>
         <br/>
         <label for="skill">Language spoken :</label>
         <br/>
          <input id="bahasa-checkbox" type="checkbox" name="language" value="bahasa">
          <label for="bahasa-checkbox">Bahasa Indonesia</label>
         <br/>
          <input id="english-checkbox" type="checkbox" name="language" value="english">
          <label for="english-checkbox">English</label>
         <br/>
          <input id="jawa-checkbox" type="checkbox" name="language" value="jawa">
          <label for="jawa-checkbox">Bahasa Jawa</label>
         <br/>
          <label for="bio">Bio </label>
         <br/>
          <textarea name="bio" rows="8" cols="40"></textarea>
         <br/>
          <input type="submit" value="Submit">
      </form>
    </div>
  </body>
</html>
