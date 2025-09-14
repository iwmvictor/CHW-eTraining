## CHW eTraining app

Web app - community health workers

- [@Iwmvictor](https://github.com/iwmvictor)

## Progress

**Completed**

- **Auth pages:** _100% done_
  - login
  - register
  - forgot
  - reset

<hr>

- **trainer's pages:**

  - courses list
  - students list
  - message page
  - new course pages
  - trainer analytics & overview
  - settings

    **Remaining:**

    - simulations page

<hr/>

- **trainee's pages:**

  - overview
  - message
  - single course/learning pages
  - calendar
  - quiz enrol
  - live session
  - ai support
  - Quiz

  - **Remaining:**

    - simulations page

**REMAINING**

- _ensuring pages are well linked_


# 🌐 CHW E-Training Platform

Hosted at 👉 [https://chw-e-training.vercel.app/](https://chw-e-training.vercel.app/)

This is a full-featured e-learning platform supporting both trainers and trainees.

---

## 🧭 Route Overview

Below is the list of all routes grouped into **public**, **authentication**, **trainer**, and **trainee** sections.

---

### 🚪 Public Routes

| Path             | Description                               |
| ---------------- | ----------------------------------------- |
| `/`              | Homepage                                  |
| `/about`         | About the platform                        |
| `/courses`       | Browse available courses                  |
| `/courses/:path` | Course detail page                        |
| `/contact`       | Contact form _(same as CourseDetailPage)_ |

---

### 🔐 Auth Routes

| Path                     | Description                    |
| ------------------------ | ------------------------------ |
| `/auth/register`         | Register new user              |
| `/auth/login`            | Login page                     |
| `/auth/recover-password` | Recover forgotten password     |
| `/auth/reset-password`   | Reset password                 |
| `/auth/*`                | Catch-all → redirects to login |

---

### 👨‍🏫 Trainer Routes

_All routes are prefixed with `/trainer`._

| Path                             | Description              |
| -------------------------------- | ------------------------ |
| `/trainer`                       | Trainer dashboard        |
| `/trainer/courses`               | My courses               |
| `/trainer/courses/new`           | Quick create new course  |
| `/trainer/course/create`         | Start new course setup   |
| `/trainer/course/create/chapter` | Add chapter to a course  |
| `/trainer/analytics`             | Analytics dashboard      |
| `/trainer/students`              | View enrolled students   |
| `/trainer/settings`              | Trainer settings/profile |
| `/trainer/inbox`                 | Messages / inbox         |

---

### 🎓 Trainee Routes

_All routes are prefixed with `/trainee`._

| Path                                       | Description                      |
| ------------------------------------------ | -------------------------------- |
| `/trainee`                                 | Trainee dashboard                |
| `/trainee/course/:path`                    | View course details              |
| `/trainee/course/:path/learning`           | Start/resume learning            |
| `/trainee/course/:path/learning/completed` | Completed course page            |
| `/trainee/live/:path`                      | Join live session                |
| `/trainee/calendar`                        | Personal learning calendar       |
| `/trainee/assessments`                     | List of assessments              |
| `/trainee/assessment/:path`                | Take an assessment               |
| `/trainee/course/certificate/:path`        | View/download course certificate |

---

## 🛠 Vercel Configuration

To enable client-side routing on Vercel, make sure you add a `vercel.json` file at the root of your project with the following content:
