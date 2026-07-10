const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[#FFFDF9] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">Settings</p>
        <h1 className="mt-2 text-3xl font-bold text-[#2F3A32]">Manage your account preferences</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2F3A32]">Profile</h3>
          <div className="mt-4 space-y-3 text-sm text-[#2F3A32]/75">
            <p>Business owner</p>
            <p>Monthly report delivery enabled</p>
            <p>Two-factor authentication enabled</p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2F3A32]">Notifications</h3>
          <div className="mt-4 space-y-3 text-sm text-[#2F3A32]/75">
            <p>Weekly forecast email</p>
            <p>Risk alerts</p>
            <p>Recommendation digest</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;