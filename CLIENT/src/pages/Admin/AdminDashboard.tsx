import React, { useState, useRef } from "react";
import styles from "./AdminDashboard.module.css";

type Employee = {
  id: string;
  email: string;
  cardId: string;
  workLocation: string;
  name: string;
  password: string;
  designation: string;
  phoneNumber: string;
  role: string;
  businessUnit: string;
  department: string;
  reportManager?: string;
};

type Post = {
  id: string;
  title: string;
  body: string;
  banner?: string;
  createdAt: string;
};

export default function AdminDashboard() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);

  const [empFirst, setEmpFirst] = useState("");
  const [empLast, setEmpLast] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empCardId, setEmpCardId] = useState("");
  const [empWorkLocation, setEmpWorkLocation] = useState("");
  const [empPassword, setEmpPassword] = useState("");
  const [empDesignation, setEmpDesignation] = useState("");
  const [empPhoneNumber, setEmpPhoneNumber] = useState("");
  const [empRole, setEmpRole] = useState("USER");
  const [empBusinessUnit, setEmpBusinessUnit] = useState("");
  const [empDepartment, setEmpDepartment] = useState("");
  const [empReportManager, setEmpReportManager] = useState("");
  const [empAvatar, setEmpAvatar] = useState<string | null>(null);

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postBanner, setPostBanner] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

//   function resetEmployeeForm() {
//     setEmpFirst("");
//     setEmpLast("");
//     setEmpEmail("");
//     setEmpCardId("");
//     setEmpWorkLocation("");
//     setEmpPassword("");
//     setEmpDesignation("");
//     setEmpPhoneNumber("");
//     setEmpRole("USER");
//     setEmpBusinessUnit("");
//     setEmpDepartment("");
//     setEmpReportManager("");
//     setEmpAvatar(null);
//   }

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setEmpAvatar(URL.createObjectURL(file));
  }

  function handleBannerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPostBanner(URL.createObjectURL(file));
  }

  function addEmployee(e: React.FormEvent) {
    e.preventDefault();
    const id = "EMP-" + Date.now().toString().slice(-6);
   
  }

  function createPost(e: React.FormEvent) {
    e.preventDefault();
    const id = "POST-" + Date.now().toString().slice(-6);
    const newPost: Post = {
      id,
      title: postTitle || "Untitled",
      body: postBody || "",
      banner:
        postBanner ||
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=",
      createdAt: new Date().toISOString(),
    };
    setPosts((s) => [newPost, ...s]);
    setShowCreatePost(false);
    setPostTitle("");
    setPostBody("");
    setPostBanner(null);
  }

  function removeEmployee(id: string) {
    setEmployees((s) => s.filter((x) => x.id !== id));
  }

  function sampleFillEmployee() {
    setEmpFirst("Aman");
    setEmpLast("Shah");
    setEmpEmail(`aman.shah${Math.floor(Math.random() * 100)}@example.com`);
    setEmpRole("Designer");
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.searchBox}>
            <input placeholder="Search employees or posts..." />
          </div>
          <div className={styles.headerRight}>
            <div className={styles.avatarPulse} title="You">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&s="
                alt="you"
              />
            </div>
          </div>
        </header>

        <section className={styles.grid}>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Recent Employees</h2>
              <button
                className={styles.linkish}
                onClick={() => setShowAddEmployee(true)}
              >
                Quick add
              </button>
            </div>
            <div className={styles.list}>
              {employees.length === 0 ? (
                <div className={styles.emptyState}>
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop&s="
                    alt="empty"
                  />
                  <p>No employees yet — add your first team member.</p>
                  <button
                    className={styles.primary}
                    onClick={() => setShowAddEmployee(true)}
                  >
                    Add employee
                  </button>
                </div>
              ) : (
                employees.map((emp) => (
                  <div className={styles.employeeRow} key={emp.id}>
                    <div className={styles.empLeft}>
                      <div>
                        <div className={styles.empName}>{emp.name}</div>
                        <div className={styles.empMeta}>{emp.email}</div>
                      </div>
                    </div>
                    <div className={styles.empRight}>
                      <div className={styles.empRole}>{emp.role}</div>
                      <button
                        className={styles.danger}
                        onClick={() => removeEmployee(emp.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Publish Center</h2>
              <button
                className={styles.linkish}
                onClick={() => setShowCreatePost(true)}
              >
                New post
              </button>
            </div>
            <div className={styles.postList}>
              {posts.length === 0 ? (
                <div className={styles.emptyStateSmall}>
                  <p>
                    No posts created. Share updates, announcements, or
                    knowledge.
                  </p>
                  <button
                    className={styles.ghost}
                    onClick={() => setShowCreatePost(true)}
                  >
                    Create Post
                  </button>
                </div>
              ) : (
                posts.map((p) => (
                  <div className={styles.postRow} key={p.id}>
                    <img src={p.banner} alt={p.title} />
                    <div>
                      <div className={styles.postTitle}>{p.title}</div>
                      <div className={styles.postTime}>
                        {new Date(p.createdAt).toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Add Employee Modal */}
        {showAddEmployee && (
          <div
            className={styles.modalBackdrop}
            onClick={() => setShowAddEmployee(false)}
          >
            <div
              className={styles.modal}
              onClick={(ev) => ev.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h3>Add Employee</h3>
                <div className={styles.modalActions}>
                  <button
                    className={styles.secondary}
                    onClick={sampleFillEmployee}
                  >
                    Sample
                  </button>
                </div>
              </div>

              <form className={styles.form} onSubmit={addEmployee}>
                <div className={styles.avatarPicker}>
                  <div className={styles.avatarPreview}>
                    <img
                      src={
                        empAvatar ||
                        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&s="
                      }
                      alt="preview"
                    />
                  </div>
                  <div>
                    <label className={styles.fileButton}>
                      Upload Avatar
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        hidden
                      />
                    </label>
                    <div className={styles.hint}>
                      Avatar is optional — will auto-generate if blank.
                    </div>
                  </div>
                </div>

                <div className={styles.row}>
                  <input
                    value={empFirst}
                    onChange={(e) => setEmpFirst(e.target.value)}
                    placeholder="First name"
                    required
                  />
                  <input
                    value={empLast}
                    onChange={(e) => setEmpLast(e.target.value)}
                    placeholder="Last name"
                  />
                </div>

                <div className={styles.row}>
                  <input
                    value={empEmail}
                    onChange={(e) => setEmpEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    required
                  />
                  <input
                    value={empCardId}
                    onChange={(e) => setEmpCardId(e.target.value)}
                    placeholder="Card ID"
                  />
                </div>

                <div className={styles.row}>
                  <input
                    value={empWorkLocation}
                    onChange={(e) => setEmpWorkLocation(e.target.value)}
                    placeholder="Work Location"
                  />
                  <input
                    value={empPassword}
                    onChange={(e) => setEmpPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                  />
                </div>

                <div className={styles.row}>
                  <input
                    value={empDesignation}
                    onChange={(e) => setEmpDesignation(e.target.value)}
                    placeholder="Designation"
                  />
                  <input
                    value={empPhoneNumber}
                    onChange={(e) => setEmpPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                  />
                </div>

                <div className={styles.row}>
                  <input
                    value={empBusinessUnit}
                    onChange={(e) => setEmpBusinessUnit(e.target.value)}
                    placeholder="Business Unit"
                  />
                  <input
                    value={empDepartment}
                    onChange={(e) => setEmpDepartment(e.target.value)}
                    placeholder="Department"
                  />
                </div>

                <div className={styles.row}>
                  <input
                    value={empReportManager}
                    onChange={(e) => setEmpReportManager(e.target.value)}
                    placeholder="Report Manager"
                  />
                  <select
                    value={empRole}
                    onChange={(e) => setEmpRole(e.target.value)}
                  >
                    <option>USER</option>
                    <option>ADMIN</option>
                    <option>MANAGER</option>
                  </select>
                </div>

                <div className={styles.formActions}>
                  <button type="submit" className={styles.primary}>
                    Add Employee
                  </button>
                  <button
                    type="button"
                    className={styles.ghost}
                    onClick={() => setShowAddEmployee(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Create Post Modal */}
        {showCreatePost && (
          <div
            className={styles.modalBackdrop}
            onClick={() => setShowCreatePost(false)}
          >
            <div
              className={styles.modal}
              onClick={(ev) => ev.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h3>Create Post</h3>
                <div className={styles.modalActions}>
                  <span className={styles.smallHint}>Share team updates</span>
                </div>
              </div>

              <form className={styles.form} onSubmit={createPost}>
                <input
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="Post title"
                  required
                />
                <textarea
                  value={postBody}
                  onChange={(e) => setPostBody(e.target.value)}
                  placeholder="Write something..."
                  rows={6}
                />

                <div className={styles.row}>
                  <label className={styles.fileButton}>
                    Upload Banner
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleBannerChange}
                      hidden
                    />
                  </label>
                  {postBanner && (
                    <img
                      className={styles.bannerPreview}
                      src={postBanner}
                      alt="banner"
                    />
                  )}
                </div>

                <div className={styles.formActions}>
                  <button type="submit" className={styles.primary}>
                    Publish
                  </button>
                  <button
                    type="button"
                    className={styles.ghost}
                    onClick={() => setShowCreatePost(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
