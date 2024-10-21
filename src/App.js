import "./App.css";
import React from 'react';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <h>
        React to This! How Humans Challenge Interactive Agents using Nonverbal
        Behaviors
      </h>
      <br></br>
      <h5>
        Chuxuan Zhang, Bermet Burkanova, Lawrence H. Kim, Lauren Yip, Ugo
        Cupcic, Stephane Lallee, and Angelica Lim
      </h5>
      <h4>
        School of Computing Science, Simon Fraser University, Burnaby, BC,
        Canada
      </h4>

      <ul class="nav-list">
        <li>
          <a href="https://arxiv.org/abs/2409.11602">Paper</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=QRi5o5v_leY">Videos</a>
        </li>
        <li>
          <a href="https://drive.google.com/drive/u/0/folders/1ZDGlArmld08QO7Ybcin0MR2RjGwY3ihL">Annotations</a>
        </li>
      </ul>

      <div>
        <p style={{ color: 'red' }}>We are currently working on anonimizing video data. To request video with facial expressions, please contact chuxuan_zhang@sfu.ca .</p>
      </div>

      <div className="App">
        <ReactPlayer url='IROS.mp4' />
      </div>

      <div id="picture">
        <img src="characters.png" alt="characters" />
      </div>

      <div id="abstract">
        <h3>ABSTRACT</h3>
        <p>
          How do people use their faces and bodies to test the interactive
          abilities of a robot? Making lively, believable agents is often seen
          as a goal for robots and virtual agents but believability can easily
          break down. In this Wizard-of- Oz (WoZ) study, we observed 1169
          nonverbal interactions between 20 participants and 6 types of agents.
          We collected the nonverbal behaviors participants used to challenge
          the characters physically, emotionally, and socially. The partic-
          ipants interacted freely with humanoid and non-humanoid forms: a
          robot, a human, a penguin, a pufferfish, a banana, and a toilet. We
          present a human behavior codebook of 188 unique nonverbal behaviors
          used by humans to test the virtual characters. The insights and design
          strategies drawn from video observations and participant interviews
          aim to help build more interaction-aware and believable robots and
          agents in the future
        </p>
      </div>

      <div id="tables">
        <h3>TABLE I</h3>
        <h2>Character-Specific Tests</h2>
        <table>
          <thead>
            <tr>
              <th>Character</th>
              <th>Nonverbal Behaviors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>banana</td>
              <td>
                grabbing; peeling; eating; rotating command by pointing down
                from above head; bending/breaking; placing the character on hand
              </td>
            </tr>
            <tr>
              <td>fish</td>
              <td>
                puffing out cheeks; swimming; flipping hands; rolling over
                command; juggling command; bouncing command
              </td>
            </tr>
            <tr>
              <td>toilet</td>
              <td>
                opening and closing lid; flushing; pulling toilet paper; sitting
                on
              </td>
            </tr>
            <tr>
              <td>penguin</td>
              <td>
                waddling; complimenting the scarf; taking off the scarf;
                shivering (pretending to be cold)
              </td>
            </tr>
            <tr>
              <td>robot</td>
              <td>robotic arm movement/robot dance; flapping ears</td>
            </tr>
            <tr>
              <td>human</td>
              <td>
                touching hair (e.g. twirling, combing, wearing); complimenting
                hair; flexing arm; tugging sleeve; grabbing shirt
              </td>
            </tr>
          </tbody>
        </table>
        <h3>TABLE II</h3>
        <h2>
        Behaviors Mimicked by Participants
        </h2>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Mimicked Behaviors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Physical (20)</td>
              <td>
                swinging (5); raise hands (2); wiggling (2); hand covering mouth
                (1); shrug (1); wave hands (1); shake head; tilt head (1); lean
                to the side (1); bend body (1); reaching out arms (1)
              </td>
            </tr>
            <tr>
              <td>Emotional (5)</td>
              <td>
                smile – happy (2); hug – affectionate (2); pouting mouth –
                sadness (1); shocked face, raise two hands, lean back –
                surprised (1); frowning – angry (1)
              </td>
            </tr>
            <tr>
              <td>Social (16)</td>
              <td>
                shrug (7); ok gesture (6); thumbs up (1); boxing (1); shaking
                head (1)
              </td>
            </tr>
          </tbody>
        </table>
        <h3>TABLE III</h3>
        <h2>Physical Tests (73)</h2>
        <table>
          <thead>
            <tr>
              <th>Category (Occurrence count)</th>
              <th>Nonverbal Physical Behaviors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>posture – full body (136)</td>
              <td>
                turning (36); tilting/leaning body (29); bending the torso
                sideways (27); jumping (16); body forward or backward (8);
                spinning (4); swaying/swing (4); bending the collapsed body pose
                (4); walking/running/jogging (in place) (3); wiggling (1);
                kneeling on the ground (1); jumping jack (1); stretch out legs
                (1); rotating upper body (1)
              </td>
            </tr>
            <tr>
              <td>posture – head/face (118)</td>
              <td>
                tilting head (23); open/closed mouth (17); pouting mouth (12);
                nodding (8); raise eyebrows (7); frowning (6), winking (6);
                shaking head (5); looking at some direction (5); stick out
                tongue (5); staring (5); squinting (4); turning head to the side
                (4); crooked mouth (3); closing one eye (2); rolling eyes (2);
                sucken cheeks (2); stick out head (1); lips touching nose (1)
              </td>
            </tr>
            <tr>
              <td>posture – arm (68)</td>
              <td>
                raising arm(s) (17); stretch arm(s) out (15); wave arms/hands
                (13); arms/hands drawing a circle (9); crossed arms (7);
                arms/hands flapping (2), flipping and rotating wrist (2); open
                arms (1); rotating forearm(s) around the elbow(s) (1); bending
                arm (1)
              </td>
            </tr>
            <tr>
              <td>posture – hand (42)</td>
              <td>
                hand(s) touching other body part(s) (23); scratching other body
                parts (5); clap (3); moving fingers (3); palms together (2);
                raising hand(s) (2); putting on hood (1); flicking hand (1);
                hand clasping (1); showing finger(s) (1)
              </td>
            </tr>
            <tr>
              <td>posture – lower body (21)</td>
              <td>
                squatting (9); lifting/raising leg(s) up (7); side kick (1);
                lifting leg(s) to the side (1); stretching out legs (1);
                standing on toes (1); shaking knees (1)
              </td>
            </tr>
            <tr>
              <td>proxemics (37)</td>
              <td>
                walk to the left/right (13); walking away from the character
                (9); running (5); walking toward the character (4); stepping
                forward/backward/to the side (4); making big steps (1); walking
                around (1)
              </td>
            </tr>
            <tr>
              <td>physical contact (13)</td>
              <td>
                push character with hands (4); poking with index finger(s),
                squeeze character by pinching index finger and thumb (3); grab
                the character (3); pick up gesture with both hands, put aside
                (1); lift character up by grabbing and lifting motion (1);
                squeeze character with palms (1)
              </td>
            </tr>
          </tbody>
        </table>
        <h3>TABLE IV</h3>
        <h2>
        Emotional Tests (34)
        </h2>
        <table>
          <thead>
            <tr>
              <th>Category (Occurrence count)</th>
              <th>Nonverbal Emotional Behaviors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>angry, annoyed, sullen, stern, aggressive, menacing (45)</td>
              <td>
                frown(23); pouting mouth (8); stare(6); shake head (3); shaking
                finger (3); pushing character away (2)
              </td>
            </tr>
            <tr>
              <td>affectionate (44)</td>
              <td>
                heart gestures (fingers, hands, arms) (22); hugging (15);
                caressing (1); petting (2); blowing kiss (2); kissing (1); hands
                overlap, rest hands on chest (aw gesture) (1)
              </td>
            </tr>
            <tr>
              <td>happy (42)</td>
              <td>
                smile (25); laugh (11); hand drawing an up-curved line in front
                of face (3); pulling the corners of mouth up (2); giggle (1)
              </td>
            </tr>
            <tr>
              <td>surprised, shocked (23)</td>
              <td>
                open mouth (11); widen eyes, mouth open (6); widen eyes/raised
                eyebrows (4); hands cover mouth (1); fingers spread out around
                eyes (1)
              </td>
            </tr>
            <tr>
              <td>sad (16)</td>
              <td>
                pouted mouth (7); rubbing eyes (pretending to cry) (3); index
                finger moving from the eye’s corner to the chin (tear dropping)
                (3); pulling the corner of mouth down with fingers (2); bowed
                head (1)
              </td>
            </tr>
            <tr>
              <td>tired (5)</td>
              <td>yawning (3); stretching (1); sighing (1)</td>
            </tr>
            <tr>
              <td>scared (1)</td>
              <td>
                slightly turning the body, frowning, fists covering mouth (1)
              </td>
            </tr>
            <tr>
              <td>shy (1)</td>
              <td>hands on face, turning away (1)</td>
            </tr>
            <tr>
              <td>contempt (1)</td>
              <td>
                turning head to the side, looking down, chin up, side eye (1)
              </td>
            </tr>
          </tbody>
        </table>

        <h3>TABLE V</h3>
        <h2>
        Social Tests (82)
        </h2>

        <table>
          <thead>
            <tr>
              <th>Category (Occurrence count)</th>
              <th>Nonverbal Social Behaviors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>greeting (125)</td>
              <td>
                waving hand (107); shaking hands (5); bow (5); salute (3); raise
                one hand, moving fingers (1); chin up and down, raise eyebrows
                quickly (1); two-finger salute (1); upwards nod (1); palms
                together, fingers facing upward (1)
              </td>
            </tr>
            <tr>
              <td>good job (42)</td>
              <td>thumb(s) up (42)</td>
            </tr>
            <tr>
              <td>approval (29)</td>
              <td>nodding (18); ok gesture (11)</td>
            </tr>
            <tr>
              <td>disapproval (26)</td>
              <td>
                shaking head (10); shaking finger (5); frowning (5); thumb(s)
                down (5); forearms crossed as ”X” (1)
              </td>
            </tr>
            <tr>
              <td>you/ your turn (19)</td>
              <td>pointing to character (19)</td>
            </tr>
            <tr>
              <td>dance(19)</td>
              <td>casual dancing(11); dab (4); whip (3); nae nae (1)</td>
            </tr>
            <tr>
              <td>attacking (19)</td>
              <td>
                boxing/punch (12); fire handgun (3); slap (2); kick (1); hit
                oneself (1)
              </td>
            </tr>
            <tr>
              <td>entertaining (12)</td>
              <td>
                peekaboo (5); making face (3); tada (2); wiggling fingers behind
                the head (1); flamingo pose (1)
              </td>
            </tr>
            <tr>
              <td>I don’t know (11)</td>
              <td>shrug (11)</td>
            </tr>
            <tr>
              <td>cheering (11)</td>
              <td>clapping (7); high five (4)</td>
            </tr>
            <tr>
              <td>deictic(11)</td>
              <td>
                point to some direction for the character to look at/follow (11)
              </td>
            </tr>
            <tr>
              <td>questioning (11)</td>
              <td>
                shrug (7); tilt head (2); raise eyebrows, ’asking’ face (1);
                horizontally wave the hand (1)
              </td>
            </tr>
            <tr>
              <td>instruct to copy the exact behavior (10)</td>
              <td>
                perform certain action and point to the character to instruct
                the character to replicate the same action (10)
              </td>
            </tr>
            <tr>
              <td>I (8)</td>
              <td>pointing to themselves (5); hand(s) rest on chest (3)</td>
            </tr>
            <tr>
              <td>come closer (7)</td>
              <td>pull hands to oneself (7)</td>
            </tr>
            <tr>
              <td>thinking (7)</td>
              <td>
                index finger over mouth, serious face (2); fist under chin (2);
                crossed arms, bite lips, nod (1); hand in chin (1); arm crossed,
                serious face, tilt head (1)
              </td>
            </tr>
            <tr>
              <td>insult (7)</td>
              <td>middle finger (7)</td>
            </tr>
            <tr>
              <td>sleep (7)</td>
              <td>closed eyes, tilting head, rest head on hands (7)</td>
            </tr>
            <tr>
              <td>goodbye (5)</td>
              <td>walk away/turn back, waving hand (5)</td>
            </tr>
            <tr>
              <td>come with me (4)</td>
              <td>
                pull hands quickly towards oneself (3); point to the back (1)
              </td>
            </tr>
            <tr>
              <td>searching (4)</td>
              <td>hands over eyes (4)</td>
            </tr>
            <tr>
              <td>re-draw attention (4)</td>
              <td>
                wave hand (when characters are facing to the side) (2); finger
                snapping (1); turn180 degree, then suddenly turn back (1)
              </td>
            </tr>
            <tr>
              <td>peace (3)</td>
              <td>victory gesture (3)</td>
            </tr>
            <tr>
              <td>look cute/pretty (2)</td>
              <td>
                hands under chin (aw face)/hands under chin (bare teeth, smile)
                (2)
              </td>
            </tr>
            <tr>
              <td>taunting (2)</td>
              <td>
                point at the character, leaning back, laughing (1); raising both
                hands, pointing to the character (1)
              </td>
            </tr>
            <tr>
              <td>holding hand (2)</td>
              <td>
                reaching out one arm, palm facing up, pointing to the
                reached-out hand (1); hold both hands (1)
              </td>
            </tr>
            <tr>
              <td>interact with a smartphone (2)</td>
              <td>
                pull out a smartphone, pretend to take a picture of the
                character (1); show the character the smartphone screen (1)
              </td>
            </tr>
            <tr>
              <td>talking (2)</td>
              <td>hands out moving, pretend to talk (1); hands out (1)</td>
            </tr>
            <tr>
              <td>cut it off/stop it (1)</td>
              <td>whip hands (1)</td>
            </tr>
            <tr>
              <td>identity revealing (1)</td>
              <td>pulling down and up the hood on clothes (1)</td>
            </tr>
            <tr>
              <td>eyes on you (1)</td>
              <td>
                pointing fingers to their own eyes then to the character (1)
              </td>
            </tr>
            <tr>
              <td>broken heart (1)</td>
              <td>hands making a heart gesture and separate hands (1)</td>
            </tr>
            <tr>
              <td>sick (1)</td>
              <td>sneeze (1)</td>
            </tr>
            <tr>
              <td>call me (1)</td>
              <td>
                hand gesture as a phone, rest the hand next to the ear (1)
              </td>
            </tr>
            <tr>
              <td>whatever (1)</td>
              <td>shrug (1)</td>
            </tr>
            <tr>
              <td>whispering (1)</td>
              <td>hand(s) closed to mouth, moving lips (1)</td>
            </tr>
            <tr>
              <td>listening (1)</td>
              <td>
                turning body 90 degrees, putting hand close to the ear (1)
              </td>
            </tr>
            <tr>
              <td>numbers (1)</td>
              <td>using fingers to indicate some number (1)</td>
            </tr>
            <tr>
              <td>reading (1)</td>
              <td>look at one palm (1)</td>
            </tr>
            <tr>
              <td>write (1)</td>
              <td>index finger of one hand hovering over another hand (1)</td>
            </tr>
            <tr>
              <td>comfort/calm (1)</td>
              <td>put two hands up, smile (1)</td>
            </tr>
            <tr>
              <td>so-so (1)</td>
              <td>wave the hand horizontally (1)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
