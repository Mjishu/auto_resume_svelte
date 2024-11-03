<script>
    import { handleSubmit } from "../actions.svelte";
    let personalInformation = $state({
        firstName: "",
        lastName: "",
        email: "",
    });

    let workExperience = $state([
        {
            title: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
            currentlyEmployed: false,
        },
    ]);

    let schoolExperience = $state([
        {
            institution: "",
            schoolingLevel: "",
            startDate: "",
            endDate: "",
            graduated: false,
        },
    ]);

    function addWorkExperience() {
        workExperience.push({
            title: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
            currentlyEmployed: false,
        });
    }

    function addSchoolExperience() {
        schoolExperience.push({
            institution: "",
            schoolingLevel: "",
            startDate: "",
            endDate: "",
            graduated: false,
        });
    }
</script>

<div class="content">
    <div class="content-child">
        <h1>Resume Builder</h1>
        <form
            onsubmit={(e) =>
                handleSubmit(
                    e,
                    personalInformation,
                    workExperience,
                    schoolExperience,
                )}
        >
            <h3>Personal Information</h3>
            <div class="personal-information info">
                <div class="input-group">
                    <label for="firstName">First Name</label>
                    <input
                        type="text"
                        bind:value={personalInformation.firstName}
                        id="firstName"
                    />
                </div>
                <div class="input-group">
                    <label for="lastName">Last Name</label>
                    <input
                        type="text"
                        bind:value={personalInformation.lastName}
                        id="lastName"
                    />
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input
                        type="email"
                        bind:value={personalInformation.email}
                        id="email"
                    />
                </div>
            </div>

            <h3>Work Experiences</h3>
            {#each workExperience as experience, index}
                <div class="work-experience info">
                    <div class="input-group">
                        <label for="title">Job Title</label>
                        <input
                            type="text"
                            bind:value={experience.title}
                            id="title"
                        />
                    </div>
                    <div class="input-group">
                        <label for="company">Company Name</label>
                        <input
                            type="text"
                            bind:value={experience.company}
                            id="company"
                        />
                    </div>
                    <div class="input-group">
                        <label for="startDate">Start Date</label>
                        <input
                            type="date"
                            bind:value={experience.startDate}
                            id="startDate"
                        />
                    </div>
                    <div class="input-group">
                        <label for="endDate">End Date</label>
                        <input
                            type="date"
                            bind:value={experience.endDate}
                            id="endDate"
                        />
                    </div>
                    <div class="input-group">
                        <label for="description">Description</label>
                        <textarea
                            bind:value={experience.description}
                            id="description"
                        ></textarea>
                    </div>
                    <div class="input-group">
                        <label for="currentlyEmployed">Currently Employed</label
                        >
                        <input
                            type="checkbox"
                            bind:checked={experience.currentlyEmployed}
                            id="currentlyEmployed"
                        />
                    </div>
                </div>
            {/each}

            <button type="button" onclick={addWorkExperience}
                >Add Work Experience</button
            >

            <h3>School Experience</h3>
            {#each schoolExperience as experience, index}
                <div class="school-experience info">
                    <div class="input-group">
                        <label for="institution">Institution</label>
                        <input
                            type="text"
                            bind:value={experience.institution}
                            id="institution"
                        />
                    </div>
                    <div class="input-group">
                        <label for="schoolingLevel">Type</label>
                        <input
                            type="text"
                            bind:value={experience.schoolingLevel}
                            id="schoolingLevel"
                        />
                    </div>
                    <div class="input-group">
                        <label for="startDate">Start Date</label>
                        <input
                            type="date"
                            bind:value={experience.startDate}
                            id="startDate"
                        />
                    </div>
                    <div class="input-group">
                        <label for="endDate">End Date</label>
                        <input
                            type="date"
                            bind:value={experience.endDate}
                            id="endDate"
                        />
                    </div>
                    <div class="input-group">
                        <label for="graduated">Graduated</label>
                        <input
                            type="checkbox"
                            bind:checked={experience.graduated}
                            id="graduated"
                        />
                    </div>
                </div>
            {/each}
            <button type="button" onclick={addSchoolExperience}
                >Add School experience</button
            >

            <button type="submit">Submit</button>
        </form>
    </div>
    <div class="content-child">
        <h2>Resume</h2>
        <div class="personal-experience">
            <h3>Personal Information</h3>
            <h4>
                {personalInformation.firstName}
                {personalInformation.lastName}
            </h4>
            <h6>{personalInformation.email}</h6>
        </div>

        <div class="work-experience">
            <h3>Work Experience</h3>
            {#each workExperience as work}
                <h5>{work.title}</h5>
                <p>{work.company}</p>
                {#if work.startDate}
                    <p>
                        From: {work.startDate} to {!work.currentlyEmployed
                            ? work.endDate
                            : "current"}
                    </p>
                {/if}
                <p class="description">{work.description}</p>
            {/each}
        </div>
        <div class="school-experience">
            <h3>Schooling Experience</h3>
            {#each schoolExperience as school}
                <h5>{school.institution}</h5>
                <p>{school.schoolingLevel}</p>
                {#if school.startDate}
                    <p>
                        From: {school.startDate} to {school.graduated
                            ? school.endDate
                            : "current"}
                    </p>
                {/if}
            {/each}
        </div>
    </div>
</div>

<style>
    .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .content-child {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
    .info {
        gap: 5rem;
    }
    .content-child * {
        width: fit-content;
    }
    .description {
        max-width: 15rem;
        word-wrap: normal;
    }
</style>
