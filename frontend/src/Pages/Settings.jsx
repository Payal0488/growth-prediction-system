const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[#FFFDF9] p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A3B18A]">Settings</p>
        <h1 className="mt-2 text-3xl font-bold text-[#2F3A32]">Manage your account preferences</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#D9E5D6] text-4xl font-bold text-[#2F3A32] ring-4 ring-[#A3B18A]/30">
              G
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2F3A32]">Profile</h3>
              <p className="mt-1 text-sm text-[#2F3A32]/75">Business owner</p>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-[#2F3A32]/75">
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