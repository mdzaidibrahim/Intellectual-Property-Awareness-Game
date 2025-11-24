const GAME_DATA = {
    level1: {
        cars: [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=800&q=80", // Placeholder for Rolls-Royce/Lambo
                question: "You see an image of a Rolls-Royce Phantom, but on the front grille, instead of the Rolls-Royce “RR” emblem, the image shows a Lamborghini bull logo. Is this image showing something legally wrong, or is everything correct in this picture?",
                options: [
                    { text: "The image has something wrong", correct: true },
                    { text: "The image is alright", correct: false }
                ],
                explanation: {
                    correct: "A Rolls-Royce cannot carry a Lamborghini logo. Car logos are legally protected trademarks, and mixing two brands creates trademark misuse.",
                    wrong: "If someone thinks this picture is fine, they misunderstand that logos are exclusive intellectual property and cannot be swapped.",
                    learning: "Trademarks identify the brand. You cannot mix or replace them."
                }
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1583121274602-3e2820c698d9?auto=format&fit=crop&w=800&q=80", // Placeholder Ferrari
                question: "In this image, a Ferrari sports car is displayed, but its hood badge is replaced with the Mercedes-Benz three-pointed star. Does this image violate any trademark or branding rules, or is this image completely fine?",
                options: [
                    { text: "Violates trademark rules", correct: true },
                    { text: "Image is completely fine", correct: false }
                ],
                explanation: {
                    correct: "Putting a Mercedes logo on a Ferrari misrepresents both brands. It’s a clear trademark violation because logos represent brand identity.",
                    wrong: "Saying this is “alright” ignores that car companies fiercely protect their emblems.",
                    learning: "Brand badges are protected assets; they cannot be interchanged."
                }
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1555215695-3004980adade?auto=format&fit=crop&w=800&q=80", // Placeholder BMW
                question: "The picture shows a BMW car with a BMW-style circular logo, but the colors inside the logo are changed to purple and yellow instead of the original blue and white. Is altering a well-known car logo like this acceptable, or is something wrong here?",
                options: [
                    { text: "Something is wrong here", correct: true },
                    { text: "This is acceptable", correct: false }
                ],
                explanation: {
                    correct: "A brand’s official logo cannot be altered. Colors are part of the trademark identity, so recoloring the BMW logo makes it an unauthorized modification.",
                    wrong: "Believing this is fine ignores that altering a trademark, even slightly, still creates infringement.",
                    learning: "Even changing colors of a logo can violate trademark rights."
                }
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80", // Placeholder Toyota
                question: "This image shows a Toyota car with the Honda “H” badge placed on the front. Everything else in the picture appears normal. Does using a different company’s badge on another brand’s car count as a problem, or is this picture alright?",
                options: [
                    { text: "It is a problem", correct: true },
                    { text: "This picture is alright", correct: false }
                ],
                explanation: {
                    correct: "Toyota cannot use Honda’s logo. Swapping badges between competing brands is trademark misuse.",
                    wrong: "Assuming this is correct ignores how protected car company emblems are.",
                    learning: "A logo must match the actual brand and product."
                }
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80", // Placeholder Audi
                question: "An Audi vehicle is shown, and the four rings logo appears correctly on the grille. The car brand and logo match perfectly with no visible mismatch. Is there anything legally or visually wrong in this picture, or is it completely correct?",
                options: [
                    { text: "Something is wrong", correct: false },
                    { text: "Completely correct", correct: true }
                ],
                explanation: {
                    correct: "The Audi rings are used exactly as intended. No incorrect branding or misuse is visible.",
                    wrong: "Calling this “wrong” misunderstands how trademarks are supposed to look when used properly.",
                    learning: "If the brand and logo match correctly, there is no infringement."
                }
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80", // Placeholder Porsche
                question: "The image displays a Porsche car, but the logo on the hood has been misspelled as “Porche.” The design looks similar, but the spelling is incorrect. Is this kind of misspelled branding acceptable, or is there something wrong with this image?",
                options: [
                    { text: "Something is wrong", correct: true },
                    { text: "Acceptable", correct: false }
                ],
                explanation: {
                    correct: "A misspelled brand name is a classic counterfeit sign. Even if the logo looks similar, using a wrong spelling violates trademark integrity.",
                    wrong: "Thinking this is acceptable ignores that counterfeiters often use tiny spelling changes to deceive.",
                    learning: "Misspellings of famous brands are not allowed; they are illegal copies."
                }
            },
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=800&q=80", // Placeholder Tesla
                question: "A Tesla car is shown, but the “T” logo on the front appears flipped upside down. Everything else in the image appears normal. Is modifying a company’s logo like this allowed, or is this image showing something wrong?",
                options: [
                    { text: "Showing something wrong", correct: true },
                    { text: "Allowed", correct: false }
                ],
                explanation: {
                    correct: "Flipping a trademark upside down is still an unauthorized alteration. Trademarks must remain unchanged to maintain identity.",
                    wrong: "Saying “it’s alright” ignores that distortion still counts as misuse.",
                    learning: "A logo must appear in its correct original form."
                }
            },
            {
                id: 8,
                image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80", // Placeholder Hyundai
                question: "In this image, a Hyundai car is displayed, but instead of the Hyundai logo, it shows a Kia emblem fixed on the front. Is this mixing of brand identity legally acceptable, or is the image incorrect?",
                options: [
                    { text: "Image is incorrect", correct: true },
                    { text: "Legally acceptable", correct: false }
                ],
                explanation: {
                    correct: "Hyundai and Kia are different companies. Putting Kia’s logo on a Hyundai misrepresents the brand and violates trademark laws.",
                    wrong: "Believing the picture is correct ignores that brand badges define product authenticity.",
                    learning: "A product must carry only its own official brand mark."
                }
            },
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80", // Placeholder Mustang
                question: "The picture shows a Ford Mustang, but instead of the Mustang horse badge, the hood features a Ferrari prancing horse logo. Is this brand-logo replacement an issue, or is it fine?",
                options: [
                    { text: "It is an issue", correct: true },
                    { text: "It is fine", correct: false }
                ],
                explanation: {
                    correct: "Ferrari’s prancing horse is a globally protected symbol. Putting it on a Mustang misleads consumers and violates trademark rights.",
                    wrong: "Calling this “alright” shows misunderstanding of how strictly brand logos are protected.",
                    learning: "Logos cannot be taken from one product and placed on another."
                }
            },
            {
                id: 10,
                image: "https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&w=800&q=80", // Placeholder Mahindra
                question: "This image shows a Mahindra Thar with the original, correctly placed Mahindra logo. Everything appears genuine and accurate. Is there anything wrong in this picture, or is it displayed correctly?",
                options: [
                    { text: "Something is wrong", correct: false },
                    { text: "Displayed correctly", correct: true }
                ],
                explanation: {
                    correct: "Everything matches: correct car, correct badge, correct usage. No IP violation here.",
                    wrong: "Calling this wrong would show misunderstanding — accurate branding is not an issue.",
                    learning: "If branding is genuine and unchanged, the image is legally correct."
                }
            }
        ],
        bikes: [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80", // Placeholder Royal Enfield
                question: "You see an image of a Royal Enfield Classic 350, but instead of the Royal Enfield badge on the tank, the bike shows the Harley-Davidson bar-and-shield logo. Is this image showing something wrong, or is it correct?",
                options: [
                    { text: "The image has something wrong", correct: true },
                    { text: "The image is alright", correct: false }
                ],
                explanation: {
                    correct: "Royal Enfield cannot use Harley-Davidson’s trademarked logo. This is a clear misuse of another brand’s identity.",
                    wrong: "Thinking the image is fine ignores that logos are protected brand symbols and cannot be swapped.",
                    learning: "Each motorcycle brand owns its logo; mixing logos is trademark infringement."
                }
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80", // Placeholder KTM
                question: "The image shows a KTM Duke 390, but the tank has a Suzuki “S” logo instead of KTM branding. Is this correct or wrong?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "Putting Suzuki’s logo on a KTM misleads consumers and violates trademark rules.",
                    wrong: "Saying it's acceptable ignores the legal importance of correct brand identification.",
                    learning: "A product must show only its actual manufacturer’s logo."
                }
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1591638246754-184e819e59a8?auto=format&fit=crop&w=800&q=80", // Placeholder Hero
                question: "A Hero Splendor is shown with its original and accurate Hero badge on the tank. No distortions or mismatches. Is anything wrong here?",
                options: [
                    { text: "Wrong", correct: false },
                    { text: "Alright", correct: true }
                ],
                explanation: {
                    correct: "Everything matches: correct bike and correct logo. No misuse here.",
                    wrong: "Calling this wrong would misunderstand what proper branding looks like.",
                    learning: "Correct, original branding never violates IP rights."
                }
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1547549644-592b53da03a1?auto=format&fit=crop&w=800&q=80", // Placeholder Yamaha
                question: "You see a Yamaha bike, but the logo printed on the tank is misspelled as “Yamhaa.” Is this image legally wrong?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "Misspelled logos are often counterfeit. Even small spelling changes break trademark rules.",
                    wrong: "Misspelling a brand name does not make it acceptable — it still infringes.",
                    learning: "Misspelled brand names = counterfeit trademarks."
                }
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1615172282427-9a5752d64b57?auto=format&fit=crop&w=800&q=80", // Placeholder Ducati
                question: "A Ducati Panigale is shown painted in Kawasaki’s signature green color with Kawasaki’s “K” logo. Is this image correct or wrong?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "Combining Ducati’s product with Kawasaki’s branding creates brand confusion and violates trademark rights.",
                    wrong: "Assuming this is fine ignores brand exclusivity and protected marks.",
                    learning: "Brand identity must match the actual manufacturer."
                }
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1558981806-ec527fa84c3d?auto=format&fit=crop&w=800&q=80", // Placeholder TVS
                question: "The picture shows a TVS Apache with its original TVS logo displayed properly. Everything looks authentic. Is this image wrong?",
                options: [
                    { text: "Wrong", correct: false },
                    { text: "Alright", correct: true }
                ],
                explanation: {
                    correct: "The branding matches the product exactly — no IP issue.",
                    wrong: "There is nothing incorrect about original branding.",
                    learning: "Authentic branding = no infringement."
                }
            },
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=800&q=80", // Placeholder Bajaj
                question: "This image shows a Bajaj Pulsar 150, but the tank has the Honda Wing logo instead of Bajaj’s Pulsar branding. Is this image wrong or fine?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "Using Honda’s trademarked logo on a Bajaj product is illegal misuse and causes brand confusion.",
                    wrong: "Believing it is correct ignores trademark exclusivity.",
                    learning: "Logos must match the true manufacturer."
                }
            },
            {
                id: 8,
                image: "https://images.unsplash.com/photo-1598209279122-8541213a0383?auto=format&fit=crop&w=800&q=80", // Placeholder Triumph
                question: "The picture shows a Triumph motorcycle, but the Triumph wordmark is stretched vertically, distorting the official logo. Is this image acceptable?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "Even stretching or distorting a logo counts as altering a protected trademark, which is not allowed.",
                    wrong: "Assuming it’s fine ignores that trademarks must keep their original shape.",
                    learning: "Logos cannot be altered, stretched, flipped, or distorted."
                }
            },
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80", // Placeholder Royal Enfield
                question: "A Royal Enfield Classic 350 is shown with its real, correct logo, nothing modified. Is anything wrong here?",
                options: [
                    { text: "Wrong", correct: false },
                    { text: "Alright", correct: true }
                ],
                explanation: {
                    correct: "This is the correct use of a brand’s own trademark on its own product.",
                    wrong: "There is no misuse when branding is legitimate.",
                    learning: "Correct logo + correct product = no IP issue."
                }
            },
            {
                id: 10,
                image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80", // Placeholder Aprilia
                question: "The picture shows an Aprilia sports bike, but the Aprilia text logo is printed upside down. Is this okay?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "Flipping a trademark upside down is an unauthorized modification. Trademarks must appear exactly as registered.",
                    wrong: "If someone believes this is fine, they ignore that distortion still violates trademark rules.",
                    learning: "Logos cannot be flipped, reversed, or rotated."
                }
            }
        ],
        movies: [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80", // Placeholder Spiderman
                question: "The image shows Spider-Man in his usual suit, but the chest symbol is replaced with Batman’s bat-emblem. Is this image legally wrong, or is everything alright?",
                options: [
                    { text: "The image has something wrong", correct: true },
                    { text: "The image is alright", correct: false }
                ],
                explanation: {
                    correct: "Spider-Man belongs to Marvel, while Batman belongs to DC. Mixing characters or symbols across studios is not allowed because both are copyrighted and trademarked separately.",
                    wrong: "Thinking this is fine ignores that different studios control their own characters and symbols; they cannot be merged without permission.",
                    learning: "Different movie studios own different characters. Cross-franchise mixing violates IP rights."
                }
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1598153346810-860daa814c4b?auto=format&fit=crop&w=800&q=80", // Placeholder Harry Potter
                question: "The image shows a Harry Potter character holding a wand, but the wand packaging has the “Star Wars Lightsaber” branding and logo. Is this correct or wrong?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "Harry Potter (Warner Bros.) and Star Wars (Disney/Lucasfilm) are separate IP universes. Using one franchise’s branding on another’s object is infringement.",
                    wrong: "Assuming it’s alright means ignoring that movie brand names and logos cannot be swapped.",
                    learning: "Each franchise controls its own names, logos, and merchandise rights."
                }
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=800&q=80", // Placeholder Star Wars
                question: "A clean, official Star Wars movie poster is shown with correct characters and correct branding. Is anything wrong here?",
                options: [
                    { text: "Wrong", correct: false },
                    { text: "Alright", correct: true }
                ],
                explanation: {
                    correct: "This is normal, authorized usage. Nothing is altered or misused.",
                    wrong: "Calling this wrong shows confusion about what legitimate movie branding looks like.",
                    learning: "An original, unchanged poster is always lawful."
                }
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1624974958318-19265143d15d?auto=format&fit=crop&w=800&q=80", // Placeholder Mickey
                question: "The image shows Mickey Mouse, but he has been redrawn to look exactly like a Minion, including Minion goggles and yellow body. Is this image wrong or okay?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "This is an unauthorized “derivative work” merging Disney’s character with Illumination’s characters. Both companies own their designs separately.",
                    wrong: "Saying it’s okay ignores that altering a copyrighted character into another franchise style still violates IP.",
                    learning: "Even modified versions of characters require permission."
                }
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=800&q=80", // Placeholder Toy Story
                question: "The picture shows a Toy Story poster, but the Pixar logo in the corner is spelled “Pixor.” Is this acceptable or not?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "Misspelled versions of famous studio names are a common counterfeit method. Even small name changes still misuse trademark identity.",
                    wrong: "It’s not okay to alter or misspell a film studio’s name ― it’s still infringement.",
                    learning: "Brands cannot be altered or misspelled to imitate originals."
                }
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80", // Placeholder Marvel
                question: "A Marvel Avengers poster is shown, but at the bottom it displays the DC Studios logo instead of Marvel’s. Is this image correct or wrong?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "Marvel and DC are separate studios with separate ownership. Using the wrong company logo misrepresents the IP.",
                    wrong: "Thinking this is fine ignores how strictly movie studios protect their names.",
                    learning: "The producer’s logo must always match the actual franchise."
                }
            },
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800&q=80", // Placeholder Minions
                question: "A Minions poster is shown with the correct Illumination logo and character designs unchanged. Is anything wrong here?",
                options: [
                    { text: "Wrong", correct: false },
                    { text: "Alright", correct: true }
                ],
                explanation: {
                    correct: "Everything shown is original and matches the studio’s official design.",
                    wrong: "Calling it wrong would misinterpret proper copyright usage.",
                    learning: "Original, accurate movie posters are completely lawful."
                }
            },
            {
                id: 8,
                image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=800&q=80", // Placeholder Frozen
                question: "The image shows Elsa from Frozen wearing an Avengers superhero suit and the Avengers “A” logo. Is this okay or not?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "Frozen (Disney Animation) and Avengers (Marvel/Disney) are separate copyrighted character universes. Mixing them creates an unauthorized mashup.",
                    wrong: "Saying it’s fine ignores that character designs and costumes are protected IP and cannot be merged freely.",
                    learning: "Combining characters from different franchises is IP misuse."
                }
            },
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=800&q=80", // Placeholder Pixar
                question: "In this image, the Pixar lamp in the logo is flipped upside down. The rest of the poster is correct. Is this legal or not?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "Studio logos must appear exactly as registered. Flipping the lamp distorts the trademark.",
                    wrong: "Alterations to a logo—even small ones—are not permitted.",
                    learning: "Movie studio logos must stay in their original, approved form."
                }
            },
            {
                id: 10,
                image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80", // Placeholder Avengers
                question: "The image shows a standard Avengers poster with the official Marvel logo, correct characters, and no distortions. Is there anything wrong here?",
                options: [
                    { text: "Wrong", correct: false },
                    { text: "Alright", correct: true }
                ],
                explanation: {
                    correct: "Everything is original and accurate, so there is no infringement.",
                    wrong: "Nothing in the image suggests misuse or alteration.",
                    learning: "Properly used original artwork is always allowed."
                }
            }
        ],
        gadgets: [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80", // Placeholder Samsung
                question: "The image shows a Samsung smartphone, but on the back panel it has the Apple bitten-apple logo instead of Samsung branding. Is this image showing something wrong, or is it fine?",
                options: [
                    { text: "The image has something wrong", correct: true },
                    { text: "The image is alright", correct: false }
                ],
                explanation: {
                    correct: "Samsung cannot use Apple’s logo. That logo is a protected trademark, and placing it on another company’s device misrepresents the brand.",
                    wrong: "Thinking this is fine ignores that using another brand’s trademark is illegal.",
                    learning: "Every device must display only its own brand’s trademark."
                }
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?auto=format&fit=crop&w=800&q=80", // Placeholder Realme
                question: "You see a phone that looks like a Realme device, but the branding on the back is spelled “Reelme.” Is this image correct or wrong?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "Misspelled brand names are a common sign of counterfeit products. Even small spelling changes violate trademark identity.",
                    wrong: "A misspelled brand is never legitimate; it imitates the real one.",
                    learning: "Brand names cannot be altered or misspelled — trademarks protect the exact wording."
                }
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80", // Placeholder iPhone
                question: "The picture shows a standard iPhone with the original Apple logo exactly as it should be. Is anything wrong here?",
                options: [
                    { text: "Wrong", correct: false },
                    { text: "Alright", correct: true }
                ],
                explanation: {
                    correct: "Nothing is altered, misplaced, or misused. Everything is original and authentic.",
                    wrong: "Calling an accurate Apple logo wrong shows misunderstanding of correct trademark usage.",
                    learning: "If a logo is used exactly as intended by the brand, it is acceptable."
                }
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1588156979435-379b9d802b74?auto=format&fit=crop&w=800&q=80", // Placeholder AirPods
                question: "An AirPods case is shown, but the logo printed on the front is the Beats “b” symbol instead of Apple’s AirPods branding. Is this image okay or wrong?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "Beats and AirPods are separate product lines with separate trademarks. Using Beats branding on AirPods misrepresents the product.",
                    wrong: "Saying it’s fine ignores that trademarks cannot be swapped between products.",
                    learning: "Logos must match the actual product line they belong to."
                }
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=800&q=80", // Placeholder MacBook
                question: "The image shows a MacBook laptop, but instead of the Apple logo, the back has a Windows four-square logo. Is this right or wrong?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "MacBooks cannot display Microsoft’s Windows logo. These are competing brands with separate trademark rights.",
                    wrong: "Believing this is acceptable ignores that major tech brands protect their marks aggressively.",
                    learning: "Placing a competitor’s logo on a device is a trademark violation."
                }
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&w=800&q=80", // Placeholder Laptop
                question: "A laptop is shown with a sticker that imitates Intel’s “Intel Inside” logo but is misspelled as “Intal Inside.” Is this acceptable?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "This is a counterfeit tactic — changing one letter to fool buyers. Trademarks protect exact spelling and design.",
                    wrong: "Misspellings are still illegal reproductions of a trademark.",
                    learning: "Counterfeiters often alter one letter — but the law still considers it infringement."
                }
            },
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80", // Placeholder Xiaomi
                question: "A Xiaomi phone is displayed with the correct “MI” logo and accurate design. Is this picture wrong or fine?",
                options: [
                    { text: "Wrong", correct: false },
                    { text: "Alright", correct: true }
                ],
                explanation: {
                    correct: "Everything is original and properly branded—no misuse.",
                    wrong: "Incorrectly labeling proper branding as wrong shows confusion.",
                    learning: "Genuine, unchanged manufacturer branding is always allowed."
                }
            },
            {
                id: 8,
                image: "https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&w=800&q=80", // Placeholder Pixel
                question: "The image shows a Google Pixel phone, but the “G” logo is stretched vertically, altering its shape. Is this legal or not?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "Logos cannot be distorted or altered. The shape, proportions, and layout are part of the trademark.",
                    wrong: "Assuming it’s fine ignores that altering logo geometry also violates brand guidelines.",
                    learning: "Logos must remain in their original proportions."
                }
            },
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1543512214-318c77a07306?auto=format&fit=crop&w=800&q=80", // Placeholder JBL
                question: "A JBL Bluetooth speaker is shown, but it has the Sony wordmark printed on it. Is the image right?",
                options: [
                    { text: "Wrong", correct: true },
                    { text: "Alright", correct: false }
                ],
                explanation: {
                    correct: "Using Sony’s logo on a JBL product misrepresents the brand and violates trademark laws.",
                    wrong: "This would confuse consumers and is legally not allowed.",
                    learning: "Brand names cannot be mixed across competing products."
                }
            },
            {
                id: 10,
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80", // Placeholder Generic Phone
                question: "A generic smartphone is shown with no logo at all. Is this wrong?",
                options: [
                    { text: "Wrong", correct: false },
                    { text: "Alright", correct: true }
                ],
                explanation: {
                    correct: "Unbranded products are legal as long as they don't copy a protected design.",
                    wrong: "Absence of a logo is not an infringement.",
                    learning: "Unbranded goods are legal."
                }
            }
        ]
    },
    level2: [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80", // Placeholder Samsung
            question: "The image shows a Samsung smartphone, but the back panel has the OnePlus “1+” logo instead of Samsung’s branding. Is this correct or wrong?",
            options: [
                { text: "Wrong", correct: true },
                { text: "Alright", correct: false }
            ],
            explanation: {
                correct: "You can’t place one company’s trademark on another company’s device. This misleads users and violates brand rights.",
                wrong: "Thinking it’s fine ignores that trademarks represent the company identity and cannot be swapped.",
                learning: "Brand logos must match the actual manufacturer."
            }
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80", // Placeholder Spiderman
            question: "A Spider-Man movie poster is shown, but at the bottom, instead of the Marvel logo, it displays the “DC Studios” logo. Is this acceptable?",
            options: [
                { text: "Wrong", correct: true },
                { text: "Alright", correct: false }
            ],
            explanation: {
                correct: "Spider-Man belongs to Marvel. Using DC’s logo misrepresents ownership and violates trademark and copyright rules.",
                wrong: "Believing this is okay ignores how strictly studios protect their branding.",
                learning: "Movie posters must show the correct studio logo."
            }
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80", // Placeholder Honda
            question: "A Honda CB Shine is shown with the correct Honda Wing logo placed properly on the tank. Is something wrong here?",
            options: [
                { text: "Wrong", correct: false },
                { text: "Alright", correct: true }
            ],
            explanation: {
                correct: "Everything matches the brand’s official styling—no misuse at all.",
                wrong: "Calling it wrong would show confusion about proper branding.",
                learning: "If the logo is original and used correctly, it is legal."
            }
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=800&q=80", // Placeholder Laptop
            question: "A laptop is shown with a logo that looks like Apple’s bitten-apple but spelled “Applee” beneath it. Is this image wrong or right?",
            options: [
                { text: "Wrong", correct: true },
                { text: "Alright", correct: false }
            ],
            explanation: {
                correct: "Misspellings and imitations are counterfeit. They confuse customers and violate trademark law.",
                wrong: "It may look similar, but altered spellings still infringe trademark rights.",
                learning: "Trademarks protect exact names and shapes—small changes don’t make them legal."
            }
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80", // Placeholder Batman
            question: "A Batman mask toy is shown inside packaging printed with the Marvel logo instead of DC branding. Is this image correct?",
            options: [
                { text: "Wrong", correct: true },
                { text: "Alright", correct: false }
            ],
            explanation: {
                correct: "Batman is a DC character. Using Marvel branding misrepresents the IP owner.",
                wrong: "Believing it’s okay ignores ownership boundaries between studios.",
                learning: "Characters must always be paired with the correct franchise branding."
            }
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80", // Placeholder Hyundai
            question: "An advertisement for a Hyundai car uses the slogan “The Ultimate Driving Machine,” which is BMW’s famous trademarked slogan. Is this acceptable or not?",
            options: [
                { text: "Wrong", correct: true },
                { text: "Alright", correct: false }
            ],
            explanation: {
                correct: "Slogans are trademarked just like logos. Using another brand’s slogan without permission is infringement.",
                wrong: "Thinking it’s okay ignores that slogans are exclusive to brands.",
                learning: "Slogans are legally protected branding assets."
            }
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1543512214-318c77a07306?auto=format&fit=crop&w=800&q=80", // Placeholder JBL
            question: "A pair of JBL earbuds shows the correct orange JBL logo and proper branding. Is anything wrong here?",
            options: [
                { text: "Wrong", correct: false },
                { text: "Alright", correct: true }
            ],
            explanation: {
                correct: "Branding is authentic and unchanged—no issue.",
                wrong: "There is no misuse when branding matches the trademark.",
                learning: "Correct use of a brand’s own logo is always valid."
            }
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1598209279122-8541213a0383?auto=format&fit=crop&w=800&q=80", // Placeholder Triumph
            question: "A Triumph motorcycle is displayed, but the bike tank shows the Yamaha “tuning forks” logo. Is this correct or wrong?",
            options: [
                { text: "Wrong", correct: true },
                { text: "Alright", correct: false }
            ],
            explanation: {
                correct: "Two motorcycle brands cannot share or interchange logos. This is clear trademark misuse.",
                wrong: "Assuming it’s okay ignores that logos identify specific manufacturers.",
                learning: "Each bike brand owns its logo—mixing them violates trademark rules."
            }
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80", // Placeholder Movie
            question: "A poster shows scenes from “Avengers” mixed with scenes from “Avatar,” labeled as a single film. Branding is merged without permission. Is this permissible?",
            options: [
                { text: "Wrong", correct: true },
                { text: "Alright", correct: false }
            ],
            explanation: {
                correct: "Combining two copyrighted movies into one poster without rights is illegal. Both studios own their characters and scenes separately.",
                wrong: "Saying it’s okay ignores copyright rules for creative work.",
                learning: "Movie footage and characters cannot be mixed without licensing."
            }
        },
        {
            id: 10,
            image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80", // Placeholder Car
            question: "A car’s steering wheel shows a logo that imitates a well-known brand (like Audi) but with changes in ring shape and spacing to look “almost” the same. Is this image right or wrong?",
            options: [
                { text: "Wrong", correct: true },
                { text: "Alright", correct: false }
            ],
            explanation: {
                correct: "Counterfeit variations that look “almost identical” still infringe trademark rights and mislead customers.",
                wrong: "Thinking it’s alright ignores that even small design tweaks do not make the logo legal.",
                learning: "You cannot slightly modify a logo and claim it’s allowed."
            }
        }
    ],
    level3: [
        {
            id: "A",
            title: "Elon Musk: The Public-Blueprint Mistake",
            story: "Early in his space ambitions, Elon shared an extensive technical whitepaper describing a novel nozzle cooling system on his personal blog and in an industry forum. He thought wide publication would attract partners and accelerate development. He included diagrams, specific materials, and a step-by-step build concept. No patent application was filed — he believed the engineering community would respect prior art. A few years later, a small aerospace supplier implemented that exact cooling approach and, acting quickly, filed broad patents covering the nozzle geometry and manufacturing process. Because Musk’s documents were public but not submitted as a formal patent application, the supplier exploited loopholes: their patent claims were written broader than the original disclosure and were legally granted. When the dispute reached court, the judge considered the prior public disclosure as prior art — it limited the plaintiff’s claims — but did not automatically transfer patent rights. The supplier’s properly filed patent still blocked certain commercial uses. SpaceX could prove earlier disclosure but lacked specific patent claims to enforce; ultimately the outcome forced expensive licensing negotiations and design workarounds.",
            questions: [
                {
                    id: 1,
                    question: "Why did Musk face trouble despite having published the idea?",
                    options: [
                        { text: "Public disclosure isn’t the same as owning patent claims.", correct: true },
                        { text: "Judges ignore public blogs.", correct: false },
                        { text: "Publishing automatically grants someone else the patent.", correct: false },
                        { text: "Patents don’t matter in aerospace.", correct: false }
                    ],
                    explanation: {
                        correct: "Correct — publication creates prior art but doesn’t give enforceable claims.",
                        wrong: "Wrong — publishing doesn’t automatically give patent rights."
                    }
                },
                {
                    id: 2,
                    question: "What did Musk fail to do that caused the legal risk?",
                    options: [
                        { text: "File targeted patent claims before public release.", correct: true },
                        { text: "Hire a better PR team.", correct: false },
                        { text: "Delete the blog post quickly.", correct: false },
                        { text: "Rename the product.", correct: false }
                    ],
                    explanation: {
                        correct: "Right — filing secures claim scope; disclosure only documents the idea.",
                        wrong: "Wrong — PR or deletion don’t establish legal ownership."
                    }
                },
                {
                    id: 3,
                    question: "What legal concept helped limit the competitor’s patent power?",
                    options: [
                        { text: "Prior art.", correct: true },
                        { text: "Trademark dilution.", correct: false },
                        { text: "Copyright protection.", correct: false },
                        { text: "Trade secret law.", correct: false }
                    ],
                    explanation: {
                        correct: "Correct — prior public disclosure can narrow or invalidate claims.",
                        wrong: "Wrong — this is not about trademarks or trade secrets."
                    }
                },
                {
                    id: 4,
                    question: "Best preventive step Musk should have taken?",
                    options: [
                        { text: "File a provisional patent and consult patent counsel.", correct: true },
                        { text: "Post more public details.", correct: false },
                        { text: "Use social media for marketing.", correct: false },
                        { text: "Ask competitors for permission.", correct: false }
                    ],
                    explanation: {
                        correct: "Right — provisional filings preserve priority while you develop.",
                        wrong: "Wrong — marketing doesn’t secure legal rights."
                    }
                }
            ]
        },
        {
            id: "B",
            title: "Jeff Bezos: The Logo Near-Miss",
            story: "Back when Amazon was expanding internationally, a local startup in a European market had been using a simple orange arrow logo for a logistics service. Amazon’s design team rolled out an updated arrow-based logo for a region-specific campaign that looked visually similar — not identical — to the local startup’s mark. The startup objected, alleging likelihood of confusion. Amazon had stronger resources and brand recognition, but the local company had trademark registrations in its country. Amazon’s legal team negotiated at first, then removed the most similar assets from that regional campaign and offered a co-marketing clause to avoid litigation. Internally this became a lesson: global brands must check local registrations and visual similarity across color, shape, and overall impression. The dispute was settled with a licensing/avoidance arrangement; Amazon adjusted its creative templates and retained broader global marks while conceding certain local uses.",
            questions: [
                {
                    id: 1,
                    question: "What legal issue did this incident center on?",
                    options: [
                        { text: "Trademark similarity / likelihood of confusion.", correct: true },
                        { text: "Patent infringement.", correct: false },
                        { text: "Copyright of written content.", correct: false },
                        { text: "Trade secret theft.", correct: false }
                    ],
                    explanation: {
                        correct: "Correct — visual similarity can cause consumer confusion.",
                        wrong: "Wrong — not a patent or trade secret case."
                    }
                },
                {
                    id: 2,
                    question: "Why did Amazon decide to change the regional assets quickly?",
                    options: [
                        { text: "To avoid expensive local litigation and consumer confusion.", correct: true },
                        { text: "Because the competitor had better ads.", correct: false },
                        { text: "To gain PR attention.", correct: false },
                        { text: "Because their logo was unpopular.", correct: false }
                    ],
                    explanation: {
                        correct: "Right — avoiding court saves time and cost.",
                        wrong: "Wrong — it was a legal-risk, not taste-driven choice."
                    }
                },
                {
                    id: 3,
                    question: "What simple pre-launch check could have prevented this?",
                    options: [
                        { text: "Local trademark clearance search.", correct: true },
                        { text: "A larger marketing budget.", correct: false },
                        { text: "Hiring more designers.", correct: false },
                        { text: "Changing product price.", correct: false }
                    ],
                    explanation: {
                        correct: "Correct — clearance prevents regional conflicts.",
                        wrong: "Wrong — budget or pricing aren’t legal fixes."
                    }
                },
                {
                    id: 4,
                    question: "If a small local firm registered the mark first, what power does that registration give them?",
                    options: [
                        { text: "Exclusive rights in that territory to stop confusing uses.", correct: true },
                        { text: "Global control of the logo.", correct: false },
                        { text: "A monopoly on logo design worldwide.", correct: false },
                        { text: "Rights to the company’s patents.", correct: false }
                    ],
                    explanation: {
                        correct: "Right — registrations are territorial.",
                        wrong: "Wrong — registrations don’t automatically grant global rights."
                    }
                }
            ]
        },
        {
            id: "C",
            title: "Steve Jobs (Apple) — The Music Licensing Headache",
            story: "In the early growth of digital music distribution, Apple created promotional videos using catchy, well-known songs. On one campaign, a third-party marketing team inserted a popular recording into a product launch video without clearing synchronization (sync) rights and mechanical licenses for digital distribution. The video went viral and was reposted widely. The rights holders contacted Apple for unauthorized use. Although Apple had the money and clout to negotiate, the oversight revealed a gap: digital ad campaigns require explicit licensing for both the composition (songwriters/publishers) and the master recording (label/owner). Apple paid retroactive licensing fees and restrictions were imposed on future campaigns. The company updated internal workflows: mandatory IP clearance before public release, a music-licensing team, and a centralized approval system. The result: bigger compliance costs initially, but far fewer legal surprises later.",
            questions: [
                {
                    id: 1,
                    question: "Which license was missing in the viral video case?",
                    options: [
                        { text: "Synchronization (sync) license for the composition and master-use license for the recording.", correct: true },
                        { text: "Patent license.", correct: false },
                        { text: "Trademark assignment.", correct: false },
                        { text: "Design patent.", correct: false }
                    ],
                    explanation: {
                        correct: "Correct — sync + master rights are required for videos.",
                        wrong: "Wrong — patents/trademarks are irrelevant here."
                    }
                },
                {
                    id: 2,
                    question: "Why did the rights holders have a valid claim?",
                    options: [
                        { text: "They control the composition and master recording rights.", correct: true },
                        { text: "They owned the product in the ad.", correct: false },
                        { text: "They disliked the company.", correct: false },
                        { text: "They wanted free exposure.", correct: false }
                    ],
                    explanation: {
                        correct: "Right — rights owners control licensing.",
                        wrong: "Wrong — claims aren’t about preference."
                    }
                },
                {
                    id: 3,
                    question: "What practical change did the company implement after this?",
                    options: [
                        { text: "Mandatory IP clearance workflow for marketing content.", correct: true },
                        { text: "Stopping all marketing.", correct: false },
                        { text: "Re-recording all songs.", correct: false },
                        { text: "Releasing ads without music.", correct: false }
                    ],
                    explanation: {
                        correct: "Correct — process fixes reduce risk.",
                        wrong: "Wrong — stopping marketing isn’t realistic."
                    }
                },
                {
                    id: 4,
                    question: "If a marketing team wants to use a popular song legally, what should they do?",
                    options: [
                        { text: "Request sync and master licenses from rights holders.", correct: true },
                        { text: "Just use 10 seconds; that’s free.", correct: false },
                        { text: "Change the song’s chorus.", correct: false },
                        { text: "Use the song and hope no one sues.", correct: false }
                    ],
                    explanation: {
                        correct: "Right — permission is required regardless of clip length.",
                        wrong: "Wrong — there’s no safe “free 10 seconds” rule."
                    }
                }
            ]
        },
        {
            id: "D",
            title: "Jack Ma & Counterfeit Flood on a Marketplace",
            story: "As Alibaba scaled, an increasing number of third-party sellers listed counterfeit goods — shirts with copied luxury logos, electronics with fake performance claims, and branded accessories sold without licenses. Buyers complained; brands sued; regulators warned. The platform had to balance marketplace openness with IP enforcement. Alibaba implemented a multi-pronged approach: takedown mechanisms, verified-brand programs, rights holder portals to submit evidence, and penalties for repeat offenders. It also introduced machine-learning filters to detect likely counterfeits and a seller verification process. The policies reduced blatant counterfeiting but highlighted deeper problems: IP enforcement needs continuous resources, clear seller accountability, and cooperation with brands and customs. The company also launched education for sellers explaining the difference between original and unlicensed branded merchandise.",
            questions: [
                {
                    id: 1,
                    question: "What principle best summarizes Alibaba’s problem?",
                    options: [
                        { text: "Marketplace liability and policing of counterfeit listings.", correct: true },
                        { text: "Patent filing backlog.", correct: false },
                        { text: "Copyright of codebase.", correct: false },
                        { text: "Trademark creation issues.", correct: false }
                    ],
                    explanation: {
                        correct: "Correct — platforms face seller-generated IP infringement.",
                        wrong: "Wrong — not primarily a patent or code issue."
                    }
                },
                {
                    id: 2,
                    question: "Which is a key prevention method the platform used?",
                    options: [
                        { text: "Rights-holder takedown portal + verified-brand programs.", correct: true },
                        { text: "Lowering seller fees.", correct: false },
                        { text: "Removing buyer reviews.", correct: false },
                        { text: "Reducing product photos.", correct: false }
                    ],
                    explanation: {
                        correct: "Right — giving brands tools and verification helps enforcement.",
                        wrong: "Wrong — fee changes don’t stop counterfeits."
                    }
                },
                {
                    id: 3,
                    question: "Why are machine-learning filters useful here?",
                    options: [
                        { text: "They flag likely counterfeit listings at scale.", correct: true },
                        { text: "They replace legal enforcement altogether.", correct: false },
                        { text: "They create counterfeit goods.", correct: false },
                        { text: "They file patents automatically.", correct: false }
                    ],
                    explanation: {
                        correct: "Correct — automation assists detection but doesn’t finish the job.",
                        wrong: "Wrong — automation helps but isn’t a legal cure-all."
                    }
                },
                {
                    id: 4,
                    question: "What should a seller do to avoid infringement?",
                    options: [
                        { text: "Use licensed logos or create original designs and keep proofs.", correct: true },
                        { text: "Copy small parts of famous logos; hope for the best.", correct: false },
                        { text: "Hide logos in product descriptions.", correct: false },
                        { text: "Rely on buyers not noticing.", correct: false }
                    ],
                    explanation: {
                        correct: "Right — permission and original design are safe.",
                        wrong: "Wrong — copying invites takedowns and legal risk."
                    }
                }
            ]
        }
    ]
};
