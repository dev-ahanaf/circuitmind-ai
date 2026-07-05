import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import { UserRound, Sparkles, Save, Layers, Bot, Edit2, Check, X, Award, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard/profile")({
  component: Profile,
});

function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form states
  const [displayName, setDisplayName] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("Electrical & Electronic Engineering");
  const [bio, setBio] = useState("Building circuits and coding MCUs.");
  const [favoriteMcu, setFavoriteMcu] = useState("Arduino Uno");
  const [avatarUrl, setAvatarUrl] = useState("/developer-photo.jpg"); // default dev photo

  // Stats
  const [stats] = useState({
    projects: "12",
    components: "38",
    aiRequests: "127",
    streak: "6d",
  });

  useEffect(() => {
    async function loadProfile() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);

      if (data.user) {
        const meta = data.user.user_metadata || {};
        
        // Load from localStorage if present
        const localDataStr = localStorage.getItem(`profile_${data.user.id}`);
        if (localDataStr) {
          try {
            const localData = JSON.parse(localDataStr);
            setDisplayName(localData.displayName || meta.display_name || data.user.email?.split("@")[0] || "Student");
            setFieldOfStudy(localData.fieldOfStudy || meta.field_of_study || "Electrical & Electronic Engineering");
            setBio(localData.bio || meta.bio || "Building circuits and coding MCUs.");
            setFavoriteMcu(localData.favoriteMcu || meta.favorite_mcu || "Arduino Uno");
            setAvatarUrl(localData.avatarUrl || meta.avatar_url || "/developer-photo.jpg");
            return;
          } catch (e) {
            // ignore fallback issues
          }
        }

        setDisplayName(meta.display_name || data.user.email?.split("@")[0] || "Student");
        setFieldOfStudy(meta.field_of_study || "Electrical & Electronic Engineering");
        setBio(meta.bio || "Building circuits and coding MCUs.");
        setFavoriteMcu(meta.favorite_mcu || "Arduino Uno");
        setAvatarUrl(meta.avatar_url || "/developer-photo.jpg");
      } else {
        // Fallback for bypassed developer session
        const localDataStr = localStorage.getItem("profile_dev");
        if (localDataStr) {
          try {
            const localData = JSON.parse(localDataStr);
            setDisplayName(localData.displayName || "Developer");
            setFieldOfStudy(localData.fieldOfStudy || "Electrical & Electronic Engineering");
            setBio(localData.bio || "Building circuits and coding MCUs.");
            setFavoriteMcu(localData.favoriteMcu || "Arduino Uno");
            setAvatarUrl(localData.avatarUrl || "/developer-photo.jpg");
            return;
          } catch (e) {
            // ignore fallback issues
          }
        }

        setDisplayName("Developer");
        setFieldOfStudy("Electrical & Electronic Engineering");
        setBio("Building circuits and coding MCUs.");
        setFavoriteMcu("Arduino Uno");
        setAvatarUrl("/developer-photo.jpg");
      }
    }
    loadProfile();
  }, []);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image file size must be less than 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setAvatarUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  async function handleSave() {
    setLoading(true);
    try {
      const localData = { displayName, fieldOfStudy, bio, favoriteMcu, avatarUrl };
      localStorage.setItem(`profile_${user?.id || "dev"}`, JSON.stringify(localData));
      
      // Dispatch storage event to alert sidebar/layout of profile change
      window.dispatchEvent(new Event("storage"));

      if (user) {
        if (user.email === "developer@circuitmind.local") {
          toast.success("Profile saved locally!");
        } else {
          const { error } = await supabase.auth.updateUser({
            data: {
              display_name: displayName,
              field_of_study: fieldOfStudy,
              bio: bio,
              favorite_mcu: favoriteMcu,
              avatar_url: avatarUrl,
            },
          });
          if (error) throw error;
          toast.success("Profile updated successfully!");
        }
      }
      setIsEditing(false);
    } catch (err) {
      toast.error("Failed to update profile: " + (err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  const name = displayName || user?.email?.split("@")[0] || "Student";

  return (
    <div className="mx-auto max-w-4xl p-6 md:p-10 space-y-6">
      {/* Header card */}
      <div className="glass flex flex-col items-start justify-between gap-6 rounded-3xl p-8 md:flex-row md:items-center relative overflow-hidden">
        <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl" />
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="relative group size-20 rounded-2xl overflow-hidden border border-border shadow-lg bg-secondary/30 shrink-0">
            <img
              src={avatarUrl}
              alt="Profile Avatar"
              className="size-full object-cover"
            />
            {isEditing && (
              <label className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-[10px] text-white font-semibold cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>Upload</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
              <span className="rounded-full bg-brand/15 px-2.5 py-0.5 text-[10px] font-semibold text-brand border border-brand/25">
                {favoriteMcu} Enthusiast
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
            <p className="text-xs text-brand font-medium mt-1">{fieldOfStudy}</p>
          </div>
        </div>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-secondary hover:bg-secondary/80 px-4 py-2.5 text-sm font-medium text-foreground transition"
          >
            <Edit2 className="size-4" /> Edit profile
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(false)}
              className="inline-flex items-center gap-2 rounded-xl bg-card border border-border hover:bg-accent px-4 py-2.5 text-sm font-medium text-foreground transition"
            >
              <X className="size-4" /> Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-medium text-white glow-brand transition disabled:opacity-75"
            >
              {loading ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Check className="size-4" />
              )}
              Save
            </button>
          </div>
        )}
      </div>

      {isEditing && (
        <div className="glass rounded-3xl p-6 md:p-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <h2 className="text-lg font-semibold border-b border-border/50 pb-2">Edit Profile Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Display Name</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="input w-full bg-background/50 border-border/60 hover:border-brand/40 focus:border-brand"
                placeholder="Full Name"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Field of Study</label>
              <select
                value={fieldOfStudy}
                onChange={(e) => setFieldOfStudy(e.target.value)}
                className="input w-full bg-background/50 border-border/60 hover:border-brand/40 focus:border-brand select"
              >
                <option value="Electrical & Electronic Engineering">Electrical & Electronic Engineering</option>
                <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                <option value="Robotics & Automation">Robotics & Automation</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="IoT & Embedded Systems">IoT & Embedded Systems</option>
                <option value="Other Technology Field">Other Field</option>
              </select>
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Favorite Microcontroller</label>
              <select
                value={favoriteMcu}
                onChange={(e) => setFavoriteMcu(e.target.value)}
                className="input w-full bg-background/50 border-border/60 hover:border-brand/40 focus:border-brand select"
              >
                <option value="Arduino Uno">Arduino Uno R3</option>
                <option value="ESP32">ESP32 DevKit</option>
                <option value="ESP8266">ESP8266 NodeMCU</option>
                <option value="Raspberry Pi Pico">Raspberry Pi Pico</option>
                <option value="STM32 Blue Pill">STM32 Blue Pill</option>
              </select>
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Bio / Description</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                className="input w-full bg-background/50 border-border/60 hover:border-brand/40 focus:border-brand py-2 resize-none"
                placeholder="Write a brief description of yourself..."
              />
            </div>
          </div>
        </div>
      )}

      {/* Bio section */}
      {!isEditing && bio && (
        <div className="glass rounded-3xl p-6">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">About Me</h2>
          <p className="text-sm text-foreground/80 leading-relaxed italic">"{bio}"</p>
        </div>
      )}

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Stat icon={Save} label="Projects" value={stats.projects} />
        <Stat icon={Layers} label="Components" value={stats.components} />
        <Stat icon={Bot} label="AI requests" value={stats.aiRequests} />
        <Stat icon={Sparkles} label="Streak" value={stats.streak} />
      </div>

      {/* Achievements section */}
      <div className="glass rounded-3xl p-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-brand" />
        <div className="flex items-center gap-2 mb-4">
          <Award className="size-5 text-brand" />
          <h2 className="font-semibold tracking-tight">Achievements & Milestones</h2>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {[
            { name: "First Circuit", desc: "Designed your first schematic" },
            { name: "10 Projects Completed", desc: "Built 10 circuit designs" },
            { name: "IoT Builder", desc: "Used ESP32 or ESP8266 boards" },
            { name: "Robotics Rookie", desc: "Programmed motor drivers" },
            { name: "Optimizer Pro", desc: "Successfully optimized a BOM table" }
          ].map((a) => (
            <div key={a.name} className="flex flex-col rounded-2xl border border-border/60 bg-card/40 px-4 py-3 hover:border-brand/35 transition cursor-default">
              <span className="font-semibold text-xs text-foreground">{a.name}</span>
              <span className="text-[10px] text-muted-foreground mt-0.5">{a.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof UserRound; label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground"><Icon className="size-4" /> {label}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
    </div>
  );
}